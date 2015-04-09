(function() {
  App.module('Main', function(Main, App, Backbone, Marionette, $, _) {
    return Main.ContentView = Backbone.Marionette.Layout.extend({
      template: 'main/content',
      attributes: {
        "class": 'full-height'
      },
      regions: {
        centerRegion: '.center',
        westRegion: '.outer-west'
      },
      initialize: function(options) {
        var _this = this;
        this.listenTo(App.settings, 'change:orientation', this.showOrientation);
        this.editorView = options.editorView;
        this.resultsView = options.resultsView;
        this.scriptsView = options.scriptsView;
        this.listenTo(this.editorView, 'render', function() {
          return _this.layout.initContent('center');
        });
        return this.listenTo(this.scriptsView, 'render', function() {
          return _this.layoutOuter.initContent('west');
        });
      },
      onRender: function() {
        this.initLayout();
        this.centerRegion.show(this.editorView);
        this.westRegion.show(this.scriptsView);
        this.resultsView.render();
        return this.showOrientation();
      },
      refresh: function() {
        this.editorView.refresh();
        this.layoutOuter.resizeAll();
        this.layout.resizeAll();
        return this.showOrientation();
      },
      initLayout: function() {
        var _this = this;
        this.layoutOuter = this.$el.layout({
          center__paneSelector: '.outer-center',
          west__paneSelector: '.outer-west',
          west__contentSelector: '.files-wrapper',
          west__size: App.settings.get('layout.west.size'),
          west__initClosed: App.settings.get('layout.west.isClosed'),
          west__spacing_closed: 0,
          west__togglerLength_open: 0,
          west__togglerLength_closed: 0,
          west__onresize_end: function(name, $el, state, opts) {
            App.settings.set('layout.west.size', state.size);
            return App.settings.save();
          },
          west__resizerCursor: 'ew-resize',
          resizable: true,
          findNestedContent: true,
          fxName: '',
          spacing_open: 3,
          spacing_closed: 3,
          slidable: false
        });
        return this.layout = this.$('.outer-center').layout({
          center__paneSelector: '.center',
          center__contentSelector: '#code-wrapper',
          center__onresize: function() {
            return _this.editorView.refresh();
          },
          east__paneSelector: '.east',
          east__contentSelector: '.script-result-section',
          east__initHidden: App.settings.get('orientation') !== 'vertical',
          east__size: App.settings.get('layout.east.size'),
          east__onresize_end: function(name, $el, state, opts) {
            App.settings.set('layout.east.size', state.size);
            return App.settings.save();
          },
          east__resizerCursor: 'ew-resize',
          south__paneSelector: '.south',
          south__contentSelector: '.script-result-section',
          south__initHidden: App.settings.get('orientation') !== 'horizontal',
          south__size: App.settings.get('layout.south.size'),
          south__onresize_end: function(name, $el, state, opts) {
            App.settings.set('layout.south.size', state.size);
            return App.settings.save();
          },
          south__resizerCursor: 'ns-resize',
          resizable: true,
          closable: false,
          findNestedContent: true,
          fxName: '',
          spacing_open: 3,
          spacing_closed: 3,
          slidable: false
        });
      },
      toggleScripts: function() {
        this.layoutOuter.toggle('west');
        App.settings.set('layout.west.isClosed', this.layoutOuter.state['west'].isClosed);
        return App.settings.save();
      },
      showOrientation: function() {
        var orientation;
        orientation = App.settings.get('orientation');
        if (orientation === 'vertical') {
          this.$('.east').append(this.resultsView.el);
          this.layout.hide('south');
          this.layout.show('east');
          this.layout.initContent('east');
        } else {
          this.$('.south').append(this.resultsView.el);
          this.layout.hide('east');
          this.layout.show('south');
          this.layout.initContent('south');
        }
        return this.editorView.refresh();
      }
    });
  });

}).call(this);
