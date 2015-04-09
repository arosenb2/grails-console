(function() {
  App.module('Main', function(Main, App, Backbone, Marionette, $, _) {
    return Main.Router = Backbone.Router.extend({
      initialize: function() {
        this.route('*path', 'newFile');
        this.route('new', 'newFile');
        return this.route(/^(.*?):(.*?)$/, 'openFile');
      },
      showFile: function(file) {
        return this.navigate("" + file.store + ":" + file.id);
      },
      showNew: function() {
        return this.navigate('new');
      },
      newFile: function() {
        App.getActiveCollection().fetchByStoreAndPath('local', '/');
        return App.execute('new');
      },
      openFile: function(store, name) {
        App.getActiveCollection().fetchByStoreAndPath('local', '/');
        return App.execute('openFile', store, name);
      }
    });
  });

}).call(this);
