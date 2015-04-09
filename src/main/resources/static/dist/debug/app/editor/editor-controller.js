(function() {
  App.module('Editor', function(Editor, App, Backbone, Marionette, $, _) {
    return Editor.Controller = Marionette.Controller.extend({
      initialize: function(options) {
        var _this = this;
        $(window).on("beforeunload", function(event) {
          if (_this.isDirty() && App.settings.get('editor.warnBeforeExit')) {
            return "You have unsaved changes.";
          }
        });
        return this.editorView = new Editor.EditorView();
      },
      newFile: function() {
        var file;
        file = new App.Entities.File;
        return this.showFile(file);
      },
      showFile: function(file) {
        App.trigger('file:show', file);
        this.file = file;
        this.editorView.refresh();
        return this.editorView.setValue(file.get('text'));
      },
      save: function() {
        var text;
        text = this.editorView.getValue();
        this.file.set('text', text);
        if (this.file.isNew()) {
          return App.execute('saveAs');
        } else {
          App.savingOn();
          return this.file.save().then(function() {
            return App.savingOff();
          });
        }
      },
      isDirty: function() {
        return this.file && this.normalizeText(this.file.get('text')) !== this.normalizeText(this.editorView.getValue());
      },
      normalizeText: function(text) {
        return text.replace(/(\r\n|\r)/gm, '\n');
      },
      getValue: function() {
        return this.editorView.getValue();
      }
    });
  });

}).call(this);
