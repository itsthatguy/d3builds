'use strict';

function MainCtrl($rootScope, $scope, DataService, BuildsService, OverlayService, ModalService) {
  DataService.get('classes').then(function(data){
    $rootScope.classData = data;

    BuildsService.get(1).then(function() {
      $scope.build = BuildsService.build;
      BuildsService.setSkill(2, 'active', 'Haunt');
    });
  });

  $scope.showModal = function(type, id, name) {
    ModalService.showModal({
      templateUrl: "components/overlay/overlay." + type + "skills.html",
      controller: "OverlayController"
    }).then(function(modal) {
      debugger;
      OverlayService.setActiveSkill(type, id, name);
      modal.controller.blur('[ui-view="mainContent"]');
    });
  };

  $scope.exit = function() {
    var gui = require('nw.gui');
    var win = gui.Window.get();
    win.close();
  };
}

export default ['$rootScope', '$scope', 'DataService', 'BuildsService', 'OverlayService', 'ModalService', MainCtrl];
