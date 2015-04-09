(function() {
  App.module('Util', function(Util, App, Backbone, Marionette, $, _) {
    return Util.Modal = {
      /*
      options.draggable
      options.resizable
      */

      showInModal: function(view, options) {
        var $el;
        if (options == null) {
          options = {};
        }
        $el = $('<div class="modal" data-backdrop="false"></div>').appendTo('body').html(view.render().el);
        $el.modal({
          show: false,
          keyboard: false
        });
        $el.on('shown.bs.modal', function() {
          return typeof view.resize === "function" ? view.resize() : void 0;
        });
        if (options.draggable) {
          $el.find('.modal-content').draggable({
            handle: '.modal-header',
            addClasses: false
          });
          $el.find('.modal-header').css('cursor', 'move');
        }
        if (options.resizable) {
          $el.find('.modal-content').resizable({
            addClasses: false,
            resize: function(event, ui) {
              return typeof view.resize === "function" ? view.resize() : void 0;
            }
          });
        }
        $el.find('.modal-header .close').on('click', function(event) {
          event.preventDefault();
          return view.close();
        });
        $el.find('.modal-footer .cancel').on('click', function(event) {
          event.preventDefault();
          return view.close();
        });
        view.on('close', function() {
          return $el.modal('hide');
        });
        $el.on('hidden.bs.modal', function() {
          return $el.remove();
        });
        $el.modal('show');
        return $el;
      }
    };
  });

}).call(this);
