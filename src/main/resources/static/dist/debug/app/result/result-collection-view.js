(function() {
  App.module('Result', function(Result, App, Backbone, Marionette, $, _) {
    return Result.ResultCollectionView = Marionette.CompositeView.extend({
      template: 'result/results',
      itemViewContainer: '.inner',
      events: {
        'click .clear': 'onClearClick',
        'submit .prompt-form': 'onPromptSubmit'
      },
      getItemView: function(item) {
        return Result.ResultView;
      },
      onAfterItemAdded: function(itemView) {
        return this.scrollToResultView(itemView);
      },
      initialize: function() {
        this.listenTo(App.settings, 'change:results.wrapText', this.setWrap);
        this.listenTo(App.settings, 'change:results.showInput', this.setShowInput);
        return this.listenTo(this, 'itemview:complete', this.scrollToResultView);
      },
      scrollToResultView: function(resultView) {
        var scroll;
        scroll = resultView.$el.position().top + resultView.$el.height() + this.$('.script-result-section').scrollTop();
        return this.$('.script-result-section').animate({
          scrollTop: scroll
        });
      },
      setWrap: function() {
        return this.$('.script-result-section').toggleClass('wrap', App.settings.get('results.wrapText'));
      },
      setShowInput: function() {
        return this.$('.script-result-section').toggleClass('hide-input', !App.settings.get('results.showInput'));
      },
      onRender: function() {
        var _this = this;
        this.setWrap();
        this.setShowInput();
        this.$('.prompt').bind('keydown', 'Shift+return return', function(event) {
          return _this.onExecute(event);
        });
        this.$('.prompt').bind('keyup', 'up', function(event) {
          return _this.onUpKeyPress(event);
        });
        return this.$('.prompt').bind('keyup', 'down', function(event) {
          return _this.onDownKeyPress(event);
        });
      },
      onClearClick: function(event) {
        event.preventDefault();
        return App.execute('clear');
      },
      onUpKeyPress: function(event) {
        return this.trigger('upKeyPress');
      },
      onDownKeyPress: function(event) {
        return this.trigger('downKeyPress');
      },
      setPromptText: function(text) {
        var prompt;
        this.$('.prompt').val(text);
        prompt = this.$('.prompt')[0];
        if (text) {
          return prompt.setSelectionRange(text.length, text.length);
        }
      },
      onExecute: function(event) {
        var input;
        input = this.$('.prompt').val();
        if (input) {
          if (!event.shiftKey) {
            this.trigger('execute', input.trim());
            this.$('.prompt').val('');
          }
          this.$('.prompt').css('overflow', 'hidden');
          this.$('.prompt').height(0);
          return this.$('.prompt').height(this.$('.prompt')[0].scrollHeight);
        }
      },
      clear: function() {
        return this.$('.script-result.welcome').remove();
      },
      serializeData: function() {
        var implicitVars, k, shortcuts, v;
        implicitVars = (function() {
          var _ref, _results;
          _ref = App.data.implicitVars;
          _results = [];
          for (k in _ref) {
            v = _ref[k];
            _results.push(App.Util.padRight("  " + k, 20) + v);
          }
          return _results;
        })();
        shortcuts = (function() {
          var _ref, _results;
          _ref = App.data.shortcuts;
          _results = [];
          for (k in _ref) {
            v = _ref[k];
            _results.push(App.Util.padRight("  " + k, 20) + v);
          }
          return _results;
        })();
        return {
          grailsVersion: App.data.grailsVersion,
          groovyVersion: App.data.groovyVersion,
          implicitVars: implicitVars,
          shortcuts: shortcuts
        };
      }
    });
  });

}).call(this);
