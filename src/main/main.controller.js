'use strict';

function MainCtrl($rootScope, $scope, SkillsService, DataService, BuildsService, OverlayService, ModalService) {
  $scope.build = {
    name: "Nada",
    class: "Your Mom",
    active: [
      {"id": 0, "skill": "Nothing Selected", "rune": "--"},
      {"id": 1, "skill": "Nothing Selected", "rune": "--"},
      {"id": 2, "skill": "Nothing Selected", "rune": "--"},
      {"id": 3, "skill": "Nothing Selected", "rune": "--"},
      {"id": 4, "skill": "Nothing Selected", "rune": "--"},
      {"id": 5, "skill": "Nothing Selected", "rune": "--"}
    ],
    passive: [
      {"id": 0, "skill": "Nothing Selected"},
      {"id": 1, "skill": "Nothing Selected"},
      {"id": 2, "skill": "Nothing Selected"},
      {"id": 3, "skill": "Nothing Selected"}
    ]
  }

  SkillsService.get().then(function(data) {
    BuildsService.get(1).then(function(data) {
      $scope.build = data;
    });
  });

  $scope.showModal = function(type, id, name) {
    ModalService.showModal({
      templateUrl: "components/overlay/" + type + "skills/overlay.html",
      controller: type + "SkillsController"
    }).then(function(modal) {
      OverlayService.setCurrentSkill(type, id, name);
      OverlayService.blur('[ui-view="mainContent"]');
    });
  };

  $scope.exit = function() {
    var gui = require('nw.gui');
    var win = gui.Window.get();
    win.close();
  };
}

export default ['$rootScope', '$scope', 'SkillsService', 'DataService', 'BuildsService', 'OverlayService', 'ModalService', MainCtrl];
