(function() {
  App.module('Result', function(Result, App, Backbone, Marionette, $, _) {
    return Result.ResultCollection = Backbone.Collection.extend({
      model: function(attrs, options) {
        return new Result.Result(attrs, options);
      }
    });
  });

}).call(this);
