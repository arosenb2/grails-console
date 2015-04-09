(function() {
  App.module('Util', function(Util, App, Backbone, Marionette, $, _) {
    return Util.Path = {
      getTokens: function(path) {
        return this.getNormalized(path).split('/');
      },
      getNormalized: function(path) {
        path = path.replace(/^\s+|\s+$/gm, '');
        if (path.slice(-1) === '/') {
          path = path.slice(0, -1);
        }
        return path;
      },
      getParent: function(path) {
        var parent, tokens;
        tokens = this.getTokens(path);
        parent = null;
        if (tokens.length > 1) {
          parent = tokens.slice(0, tokens.length - 1).join('/') + '/';
        }
        return parent;
      },
      hasParent: function(path) {
        return !!(this.getParent(path));
      },
      getCurrentDir: function(path) {
        var tokens;
        tokens = this.getTokens(path);
        return tokens[tokens.length - 1];
      }
    };
  });

}).call(this);
