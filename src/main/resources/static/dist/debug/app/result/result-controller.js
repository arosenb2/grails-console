(function() {
  App.module('Result', function(Result, App, Backbone, Marionette, $, _) {
    Result.Controller = Marionette.Controller.extend({
      initialize: function(options) {
        this.history = new Result.History;
        this.collection = new App.Result.ResultCollection();
        this.resultsView = new App.Result.ResultCollectionView({
          collection: this.collection
        });
        this.resultsView.on('execute', this.executeInline, this);
        this.resultsView.on('upKeyPress', this.onUpKeyPress, this);
        return this.resultsView.on('downKeyPress', this.onDownKeyPress, this);
      },
      onUpKeyPress: function() {
        var text;
        text = this.history.getPrev();
        return this.resultsView.setPromptText(text);
      },
      onDownKeyPress: function() {
        var text;
        text = this.history.getNext();
        return this.resultsView.setPromptText(text);
      },
      executeInline: function(input) {
        this.history.add(input);
        return this.execute(input);
      },
      execute: function(input) {
        var result;
        result = new App.Result.Result({
          input: input
        });
        result.execute();
        return this.collection.add(result);
      },
      clear: function() {
        this.resultsView.clear();
        return this.collection.reset();
      }
    });
    return Result.History = (function() {
      function _Class() {
        this.array = [];
        this.resetIndex();
      }

      _Class.prototype.add = function(text) {
        this.array.push(text);
        return this.resetIndex();
      };

      _Class.prototype.getPrev = function() {
        if (this.index > 0) {
          this.index--;
        }
        return this.array[this.index];
      };

      _Class.prototype.getNext = function() {
        var text;
        if (this.index < this.array.length) {
          this.index++;
        }
        text = this.index < this.array.length ? this.array[this.index] : '';
        return text;
      };

      _Class.prototype.resetIndex = function() {
        return this.index = this.array.length;
      };

      return _Class;

    })();
  });

}).call(this);
