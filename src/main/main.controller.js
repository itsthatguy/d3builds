'use strict';

function MainCtrl($rootScope, $scope, DataService, BuildsService, OverlayService, ModalService) {
  DataService.get('classes').then(function(data){
    $rootScope.classData = data;

    BuildsService.get(1).then(function() {
      $scope.build = BuildsService.build;
    });
  });

  $scope.showModal = function(type, id, name) {
    ModalService.showModal({
      templateUrl: "components/overlay/" + type + "skills/overlay.html",
      controller: type + "SkillsController"
    }).then(function(modal) {
      OverlayService.setActiveSkill(type, id, name);
      OverlayService.blur('[ui-view="mainContent"]');
    });
  };

  $scope.exit = function() {
    var gui = require('nw.gui');
    var win = gui.Window.get();
    win.close();
  };
}

export default ['$rootScope', '$scope', 'DataService', 'BuildsService', 'OverlayService', 'ModalService', MainCtrl];
