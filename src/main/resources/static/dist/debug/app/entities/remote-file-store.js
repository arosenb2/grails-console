(function() {
  App.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
    /*
    File store for files on the server.
    */

    Entities.RemoteFileStore = (function() {
      function RemoteFileStore() {}

      RemoteFileStore.prototype.storeName = 'remote';

      RemoteFileStore.prototype.displayName = 'Remote Storage';

      RemoteFileStore.prototype.syncFile = function(method, file, options) {
        var url;
        url = file.isNew() ? App.createLink('file') : App.createLink('file', {
          path: file.get('id')
        });
        return Backbone.sync(method, file, _.extend({
          url: url
        }, options)).pipe(null, this.parseErrorMessage);
      };

      RemoteFileStore.prototype.syncCollection = function(method, collection, options) {
        var url;
        url = App.createLink('listFiles', {
          path: collection.getNormalizedPath() + '/'
        });
        return Backbone.sync(method, collection, _.extend({
          url: url
        }, options));
      };

      RemoteFileStore.prototype.parseCollection = function(collection, response, options) {
        collection.path = response.path;
        return response.files;
      };

      RemoteFileStore.prototype.parseErrorMessage = function(jqxhr) {
        var ex, resp, _ref;
        resp = null;
        try {
          resp = JSON.parse(jqxhr.responseText);
        } catch (_error) {
          ex = _error;
        }
        return (_ref = resp != null ? resp.error : void 0) != null ? _ref : 'An error occurred.';
      };

      return RemoteFileStore;

    })();
    return App.on('initialize:before', function(options) {
      if (options.remoteFileStoreEnabled) {
        return App.addFileStore(new Entities.RemoteFileStore);
      }
    });
  });

}).call(this);
