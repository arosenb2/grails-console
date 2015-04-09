(function() {
  App.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
    return Entities.FileCollection = Backbone.Collection.extend({
      model: function(attrs, options) {
        var file;
        file = new Entities.File(attrs, options);
        file.store = options.collection.store;
        return file;
      },
      comparator: function(file) {
        return file.get('type') + file.get('name');
      },
      store: 'local',
      path: '/',
      fetchByStoreAndPath: function(store, path) {
        this.store = store;
        this.path = path;
        this.trigger('fetching');
        return this.fetch({
          reset: true
        });
      },
      up: function() {
        return this.fetchByStoreAndPath(this.store, this.getParent());
      },
      getParent: function() {
        return App.Util.Path.getParent(this.path);
      },
      hasParent: function() {
        return App.Util.Path.hasParent(this.path);
      },
      getCurrentDir: function() {
        return App.Util.Path.getCurrentDir(this.path);
      },
      getNormalizedPath: function() {
        return App.Util.Path.getNormalized(this.path);
      },
      sync: function(method, collection, options) {
        return App.getFileStoreByName(this.store).syncCollection(method, collection, options);
      },
      parse: function(response, options) {
        return App.getFileStoreByName(this.store).parseCollection(this, response, options);
      }
    });
  });

}).call(this);
