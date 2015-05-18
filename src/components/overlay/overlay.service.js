'use strict';

function OverlayService() {
  return {
    active: {},
    passive: {},
    vague: '',

    setActiveSkill: function(type, id, name) {
      return this[type][id] = name;
    },

    blur: function(selector) {
      this.vague = $(selector).Vague({
        intensity:   0,
        forceSVGUrl: false,
        animationOptions: {
          duration: 400,
          easing: 'linear'
        }
      });

      this.vague.animate(8);
      $('.overlay').animate({
        opacity: 1,
      }, 100);
    },

    closeModal: function(result, close) {
      $('.overlay').animate({
        opacity: 0,
      }, 200, function() {
        close(result, 800);
      });

      this.vague.animate(0).done(function() {
        vague.unblur();
      });
    }
  };
}

export default [OverlayService];

