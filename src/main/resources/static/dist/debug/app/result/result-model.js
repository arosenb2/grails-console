(function() {
  App.module('Result', function(Result, App, Backbone, Marionette, $, _) {
    return Result.Result = Backbone.Model.extend({
      isSuccess: function() {
        return !this.get("exception") && !this.get("error");
      },
      execute: function() {
        var jqxhr,
          _this = this;
        this.set('loading', true);
        jqxhr = $.post(App.createLink('execute'), {
          autoImportDomains: App.settings.get('editor.autoImportDomains'),
          code: this.get('input')
        });
        jqxhr.done(function(response) {
          return _this.set({
            loading: false,
            totalTime: response.totalTime,
            exception: response.exception,
            result: response.result,
            resultTree: response.resultTree,
            output: response.output
          });
        });
        return jqxhr.fail(function() {
          return _this.set({
            loading: false,
            error: 'Server returned an error.'
          });
        });
      }
    });
  });

}).call(this);
