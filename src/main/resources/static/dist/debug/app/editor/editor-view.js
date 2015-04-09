(function() {
  App.module('Editor', function(Editor, App, Backbone, Marionette, $, _) {
    return Editor.EditorView = Marionette.ItemView.extend({
      template: 'editor/editor',
      events: {
        'click button.open': 'onOpenClick',
        'click button.execute': 'onExecuteClick',
        'click button.new': 'onNewClick',
        'click button.save': 'onSaveClick',
        'click a.save-as': 'onSaveAsClick'
      },
      initialize: function() {
        return this.listenTo(App.settings, 'change:theme', this.setTheme);
      },
      attributes: {
        id: 'editor'
      },
      onRender: function() {
        return this.initEditor();
      },
      initEditor: function() {
        this.editor = CodeMirror.fromTextArea(this.$('textarea[name=code]')[0], {
          matchBrackets: true,
          mode: 'groovy',
          lineNumbers: true,
          indentWithTabs: false,
          tabSize: 4,
          indentUnit: 4,
          extraKeys: {
            'Ctrl-Enter': function() {
              return App.execute('execute');
            },
            'Cmd-Enter': function() {
              return App.execute('execute');
            },
            'Ctrl-S': function() {
              return App.execute('save');
            },
            'Cmd-S': function() {
              return App.execute('save');
            },
            'Esc': function() {
              return App.execute('clear');
            }
          }
        });
        this.editor.focus();
        this.editor.setValue('');
        return this.setTheme();
      },
      setTheme: function() {
        return this.editor.setOption('theme', App.settings.get('theme'));
      },
      getValue: function() {
        return this.editor.getValue();
      },
      refresh: function() {
        return this.editor.refresh();
      },
      setValue: function(text) {
        this.editor.setValue(text);
        this.editor.refresh();
        return this.editor.focus();
      },
      onOpenClick: function(event) {
        event.preventDefault();
        return App.execute('toggleScripts');
      },
      onNewClick: function(event) {
        event.preventDefault();
        return App.execute('new');
      },
      onSaveClick: function(event) {
        event.preventDefault();
        return App.execute('save');
      },
      onSaveAsClick: function(event) {
        event.preventDefault();
        return App.execute('saveAs');
      },
      onExecuteClick: function(event) {
        event.preventDefault();
        return App.execute('execute');
      },
      onShow: function() {
        return this.editor.focus();
      }
    });
  });

}).call(this);
