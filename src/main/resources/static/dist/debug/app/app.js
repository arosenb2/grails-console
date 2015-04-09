(function() {
  var Application;

  Marionette.Renderer.render = function(template, data) {
    return JST[template](data);
  };

  Application = Backbone.Marionette.Application.extend({
    fileStores: {},
    onInitializeBefore: function(options) {
      var k, modifier, v, _ref;
      if (options == null) {
        options = {};
      }
      this.data = options;
      _ref = this.data;
      for (k in _ref) {
        v = _ref[k];
        this.data[App.Util.snakeToCamel(k)] = v;
      }
      modifier = navigator.userAgent.indexOf('Mac OS X') !== -1 ? 'Cmd' : 'Ctrl';
      this.data.shortcuts = {};
      this.data.shortcuts["" + modifier + "-enter"] = 'Execute';
      this.data.shortcuts["" + modifier + "-s"] = 'Save';
      this.data.shortcuts["Esc"] = 'Clear output';
      this.addRegions({
        headerRegion: '#header',
        mainRegion: '#main-content'
      });
      this.settings = this.request('settings:entity');
      this.editorController = new App.Editor.Controller;
      this.filesController = new App.Files.Controller;
      this.resultController = new App.Result.Controller;
      this.router = new App.Main.Router();
      this.contentView = new App.Main.ContentView({
        editorView: this.editorController.editorView,
        resultsView: this.resultController.resultsView,
        scriptsView: this.filesController.scriptsView
      });
      this.mainRegion.show(this.contentView);
      this.contentView.refresh();
      this.on('file:deleted', this.onFileDeleted);
      this.commands.setHandler('save', this.handleSave, this);
      this.commands.setHandler('saveAs', this.handleSaveAs, this);
      this.commands.setHandler('new', this.handleNew, this);
      this.commands.setHandler('execute', this.handleExecute, this);
      this.commands.setHandler('clear', this.handleClear, this);
      this.commands.setHandler('help', this.handleHelp, this);
      this.commands.setHandler('openFile', this.handleOpenFile, this);
      this.commands.setHandler('showFile', this.handleShowFile, this);
      return this.commands.setHandler('toggleScripts', this.handleToggleScripts, this);
    },
    handleExecute: function() {
      var input;
      input = this.editorController.getValue();
      return this.resultController.execute(input);
    },
    handleClear: function() {
      return this.resultController.clear();
    },
    handleNew: function() {
      if (this._okToCloseCurrentFile()) {
        this.router.showNew();
        return this.editorController.newFile();
      }
    },
    _okToCloseCurrentFile: function() {
      return !App.settings.get('editor.warnBeforeExit') || !this.editorController.isDirty() || confirm('Are you sure? You have unsaved changes.');
    },
    handleSave: function() {
      return this.editorController.save();
    },
    handleSaveAs: function() {
      var collection, file, path, store, text,
        _this = this;
      text = this.editorController.getValue();
      if (this.editorController.file.isNew()) {
        collection = this.getActiveCollection();
        store = collection.store;
        path = collection.path;
      } else {
        file = this.getActiveFile();
        store = file.store;
        path = file.getParent();
      }
      return this.filesController.promptForNewFile(store, path).done(function(file) {
        if (file) {
          file.set('text', text);
          _this.savingOn();
          return file.save().then(function() {
            _this.savingOff();
            _this.editorController.showFile(file);
            _this.router.showFile(file);
            return _this.trigger('file:created', file);
          });
        }
      });
    },
    getActiveFile: function() {
      return this.editorController.file;
    },
    getActiveCollection: function() {
      return this.filesController.collection;
    },
    handleHelp: function() {
      var view;
      view = new App.Main.HelpView;
      return App.Util.Modal.showInModal(view, {
        draggable: true
      });
    },
    handleOpenFile: function(store, name) {
      var dfd,
        _this = this;
      dfd = App.request('file:entity', store, name);
      dfd.done(function(file) {
        if (file.isDirectory()) {
          _this.filesController.fetchScripts(file.store, file.getAbsolutePath());
          return _this.editorController.newFile();
        } else {
          _this.filesController.fetchScripts(file.store, file.getParent());
          return _this.editorController.showFile(file);
        }
      });
      return dfd.fail(function(error) {
        alert(error);
        return _this.editorController.newFile();
      });
    },
    handleShowFile: function(file) {
      var _this = this;
      if (this._okToCloseCurrentFile()) {
        return file.fetch().done(function() {
          _this.editorController.showFile(file);
          return _this.router.showFile(file);
        });
      }
    },
    handleToggleScripts: function() {
      this.contentView.toggleScripts();
      return this.settings.set('');
    },
    onFileDeleted: function(file) {
      if (this.getActiveFile().id === file.id) {
        this.router.showNew();
        return this.editorController.newFile();
      }
    },
    onStart: function(data) {
      this.headerRegion.show(new App.Main.HeaderView);
      this._initKeybindings();
      this.showTheme();
      this.settings.on('change:theme', this.showTheme, this);
      if (typeof Backbone !== "undefined" && Backbone !== null ? Backbone.history : void 0) {
        Backbone.history.start({
          pushState: false
        });
      }
      return $('body').css('visibility', 'visible');
    },
    _initKeybindings: function() {
      var _this = this;
      $(document).bind('keydown', 'Ctrl+return Meta+return', function() {
        return _this.execute('execute');
      });
      $(document).bind('keydown', 'Ctrl+s Meta+s', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return _this.execute('save');
      });
      return $(document).bind('keydown', 'esc', function() {
        return _this.execute('clear');
      });
    },
    createLink: function(action, params) {
      var link;
      link = "" + this.data.baseUrl + "/" + action;
      if (params) {
        link += '?' + $.param(params, true);
      }
      return link;
    },
    showTheme: function() {
      var theme;
      theme = this.settings.get('theme');
      return $('body').attr('data-theme', theme);
    },
    savingOn: function() {
      return $('.navbar .saving').fadeIn(100);
    },
    savingOff: function() {
      return $('.navbar .saving').fadeOut(100);
    },
    addFileStore: function(fileStore) {
      return this.fileStores[fileStore.storeName] = fileStore;
    },
    getFileStoreByName: function(storeName) {
      return this.fileStores[storeName];
    },
    getAllFileStores: function() {
      return _.values(this.fileStores);
    },
    removeFileStore: function(fileStore) {
      return delete this.fileStores[fileStore.storeName];
    }
  });

  window.App = new Application();

}).call(this);
