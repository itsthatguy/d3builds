'use strict';

function MainCtrl($rootScope, $scope, SkillsService, DataService, BuildsService, OverlayService, ModalService) {
  $scope.build = BuildsService.build;

  SkillsService.all().then(function(data) {
    BuildsService.get(1).then(function(data) {
      $scope.build = BuildsService.build;
      SkillsService.setClass(data.class);
    });
  });

  $scope.showClassesModal = function() {
    ModalService.showModal({
      templateUrl: "main/classes/overlay.html",
      controller: "classesController"
    }).then(function(modal) {
      OverlayService.blur('[ui-view="mainContent"]');
    });
  };

  $scope.openActiveSkillSlot = function(id, name) {
    ModalService.showModal({
      templateUrl: "main/activeskills/overlay.html",
      controller: "ActiveSkillsController",
      inputs: {
        slotId: id,
        skillName: name
      }
    }).then(function(modal) {
      OverlayService.blur('[ui-view="mainContent"]');
    });
  };

  $scope.openPassiveSkillSlot = function(id, name) {
    ModalService.showModal({
      templateUrl: "main/passiveskills/overlay.html",
      controller: "PassiveSkillsController",
      inputs: {
        slotId: id,
        skillName: name
      }
    }).then(function(modal) {
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
