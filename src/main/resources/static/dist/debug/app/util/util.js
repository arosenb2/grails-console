(function() {
  App.module('Util', function(Util, App, Backbone, Marionette, $, _) {
    Util.snakeToCamel = function(s) {
      return s.replace(/(\_\w)/g, function(m) {
        return m[1].toUpperCase();
      });
    };
    return Util.padRight = function(s, length, padChar) {
      if (padChar == null) {
        padChar = ' ';
      }
      while (s.length < length) {
        s = s + padChar;
      }
      return s;
    };
  });

}).call(this);
