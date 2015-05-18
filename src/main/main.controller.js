'use strict';

function MainCtrl($rootScope, $scope, SkillsService, DataService, BuildsService, OverlayService, ModalService) {
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
