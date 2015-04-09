(function() {
  App.module('Main', function(Main, App, Backbone, Marionette, $, _) {
    return Main.SettingsView = Backbone.Marionette.ItemView.extend({
      template: 'main/settings',
      events: {
        'click .setting': 'onSettingClick',
        'click .help': 'onHelpClick'
      },
      tagName: 'ul',
      attributes: {
        'class': 'dropdown-menu pull-right settings',
        'role': 'menu'
      },
      initialize: function() {
        return this.listenTo(this.model, 'change', this.render);
      },
      onRender: function() {
        var _this = this;
        this.$('.orientation-horizontal').toggleClass('selected', this.model.get('orientation') === 'horizontal');
        this.$('.orientation-vertical').toggleClass('selected', this.model.get('orientation') === 'vertical');
        this.$('.results-wrap').toggleClass('selected', this.model.get('results.wrapText'));
        this.$('.show-input').toggleClass('selected', this.model.get('results.showInput'));
        this.$('.auto-import-domains').toggleClass('selected', this.model.get('editor.autoImportDomains'));
        this.$('.warn-before-exit').toggleClass('selected', this.model.get('editor.warnBeforeExit'));
        return this.$('.theme').each(function(index, el) {
          var $el;
          $el = $(el);
          return $el.toggleClass('selected', _this.model.get('theme') === $el.data('theme'));
        });
      },
      onSettingClick: function(event) {
        var $el;
        event.preventDefault();
        event.stopPropagation();
        $el = $(event.currentTarget);
        switch (false) {
          case !$el.is('.orientation-horizontal'):
            this.model.set('orientation', 'horizontal');
            break;
          case !$el.is('.orientation-vertical'):
            this.model.set('orientation', 'vertical');
            break;
          case !$el.is('.results-wrap'):
            this.model.toggle('results.wrapText');
            break;
          case !$el.is('.show-input'):
            this.model.toggle('results.showInput');
            break;
          case !$el.is('.auto-import-domains'):
            this.model.toggle('editor.autoImportDomains');
            break;
          case !$el.is('.warn-before-exit'):
            this.model.toggle('editor.warnBeforeExit');
            break;
          case !$el.is('.theme'):
            this.model.set('theme', $el.data('theme'));
        }
        return this.model.save();
      },
      onHelpClick: function(event) {
        event.preventDefault();
        return App.execute('help');
      }
    });
  });

}).call(this);
