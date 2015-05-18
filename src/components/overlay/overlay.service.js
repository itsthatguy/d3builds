'use strict';

function OverlayService() {
  return {
    active: {},
    passive: {},

    setCurrentSkill: function(type, id, name) {
      this.currentSkillSlot = id;
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

    closeModal: function(close) {
      var vague = this.vague;

      $('.overlay').animate({
        opacity: 0,
      }, 200, function() {
        close(800);
      });

      vague.animate(0).done(function() {
        vague.unblur();
      });
    }
  };
}

export default [OverlayService];

