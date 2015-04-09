(function() {
  App.module('Result', function(Result, App, Backbone, Marionette, $, _) {
    Result.ResultView = Marionette.ItemView.extend({
      template: 'result/result',
      attributes: {
        "class": 'script-result'
      },
      modelEvents: {
        change: 'render'
      },
      events: {
        'click .result .toggle': 'onToggleClick'
      },
      onRender: function() {
        if (!this.model.get('loading')) {
          if (!this.model.isSuccess()) {
            this.$el.addClass('stacktrace');
          }
          return this.trigger('complete');
        }
      },
      onToggleClick: function(event) {
        var $el;
        event.preventDefault();
        $el = $(event.currentTarget);
        return $el.closest('.tree-item').toggleClass('open');
      },
      serializeData: function() {
        var json;
        json = this.model.toJSON();
        json.result = this.model.get('error') || this.model.get('result');
        json.inputGutter = '<';
        json.inputLines = this.model.get('input').match(/[^\r\n]+/g);
        if (this.model.has('resultTree')) {
          json.resultTree = {
            name: json.result,
            children: this.convertTreeNode(this.model.get('resultTree'))
          };
        }
        return json;
      },
      convertTreeNode: function(node) {
        var it, k, result, v;
        if (_.isArray(node)) {
          result = (function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = node.length; _i < _len; _i++) {
              it = node[_i];
              _results.push(this.convertTreeNode(it));
            }
            return _results;
          }).call(this);
        } else if (_.isObject(node)) {
          result = (function() {
            var _results;
            _results = [];
            for (k in node) {
              v = node[k];
              _results.push({
                name: k,
                value: v
              });
            }
            return _results;
          })();
        } else {
          result = {
            name: node
          };
        }
        return result;
      }
    });
    return Handlebars.registerPartial('tree', JST['result/tree']);
  });

}).call(this);
