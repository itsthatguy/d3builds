'use strict';

function MainCtrl($rootScope, $scope, DataService, BuildsFactory, ModalService) {
  DataService.get('classes').then(function(data){
    $rootScope.classData = data;

    BuildsFactory.get(1).then(function() {
      $scope.build = BuildsFactory.build;
      BuildsFactory.setSkill(2, 'active', 'Haunt');
    });
  });

  $scope.showModal = function(type, name) {
    ModalService.showModal({
      templateUrl: "components/overlay/overlay." + type + ".html",
      controller: "OverlayController"
    }).then(function(modal) {
      console.log(name);
      modal.controller.setActiveSkill(name);
      modal.controller.blur('[ui-view="mainContent"]');
    });

  };

  $scope.exit = function() {
    var gui = require('nw.gui');
    var win = gui.Window.get();
    win.close();
  };
}

export default ['$rootScope', '$scope', 'DataService', 'BuildsFactory', 'ModalService', MainCtrl];
