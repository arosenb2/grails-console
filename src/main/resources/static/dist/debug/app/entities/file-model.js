(function() {
  App.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
    Entities.File = Backbone.Model.extend({
      defaults: {
        text: ''
      },
      getAbsolutePath: function() {
        return this.id;
      },
      getParent: function() {
        return App.Util.Path.getParent(this.id);
      },
      isDirectory: function() {
        return this.get('type') === 'dir';
      },
      isFile: function() {
        return this.get('type') === 'file';
      },
      sync: function(method, file, options) {
        var fileStore;
        fileStore = App.getFileStoreByName(this.store);
        if (fileStore) {
          return App.getFileStoreByName(this.store).syncFile(method, file, options);
        } else {
          return alert("Invalid store: " + this.store);
        }
      }
    });
    return App.reqres.setHandler('file:entity', function(store, path) {
      var file;
      file = new Entities.File({
        id: path
      });
      file.store = store;
      return file.fetch().pipe(function() {
        return file;
      });
    });
  });

}).call(this);
