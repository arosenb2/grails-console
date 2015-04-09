(function() {
  App.module('Files', function(Files, App, Backbone, Marionette, $, _) {
    return Files.Controller = Marionette.Controller.extend({
      initialize: function() {
        this.collection = new App.Entities.FileCollection();
        this.listenTo(App, 'file:created', function(file) {
          return this.fetchScripts(file.store, file.getParent());
        });
        return this.scriptsView = new Files.ScriptsView({
          collection: this.collection
        });
      },
      fetchScripts: function(store, path) {
        return this.collection.fetchByStoreAndPath(store, path);
      },
      promptForNewFile: function(store, path) {
        var collection, dfd, view;
        dfd = $.Deferred();
        collection = new App.Entities.FileCollection();
        view = new Files.FilesSectionView({
          collection: collection
        });
        collection.fetchByStoreAndPath(store, path);
        App.Util.Modal.showInModal(view, {
          draggable: true,
          resizable: true
        });
        view.$el.find('.file-name').focus();
        view.on('save', function(file) {
          dfd.resolveWith(null, [file]);
          return view.close();
        });
        view.on('close', function() {
          return dfd.resolve();
        });
        return dfd.promise();
      }
    });
  });

}).call(this);
