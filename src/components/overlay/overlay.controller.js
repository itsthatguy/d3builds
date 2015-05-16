'use strict';

function OverlayController($rootScope, $scope, close, DataService) {
  var vague;

  $scope.setActiveSkill = this.setActiveSkill = function(name) {
    $scope.activeSkill = name;
  };

  $scope.pages = {}

  $scope.getRunesFromSkill = function(skill) {
    console.log(skill.runes);
    if (skill.name == $scope.activeSkill) {
      return skill.runes;
    }
  }

  this.blur = function(selector) {
    vague = $(selector).Vague({
      intensity:      0,
      forceSVGUrl:    false,
      animationOptions: {
        duration: 400,
        easing: 'linear' // here you can use also custom jQuery easing functions
      }
    });

    vague.animate(8);
    $('.overlay').animate({
      opacity: 1,
    }, 100);
  };

  $scope.closeModal = function(result) {
    $('.overlay').animate({
      opacity: 0,
    }, 200, function() {
      close(result, 800);
    });

    vague.animate(0).done(function() {
      vague.unblur();
    });
  };

  $scope.passive = function(el) {
    return console.log(el);
  };

}

export default ['$rootScope', '$scope', 'close', 'DataService', OverlayController];
