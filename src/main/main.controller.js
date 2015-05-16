'use strict';

function MainCtrl($rootScope, $scope, DataService, ModalService) {
  DataService.get('classes').then(function(data){
    $rootScope.classData = data;

    DataService.get('builds/1').then(function(data){
      $rootScope.build = data;
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

export default ['$rootScope', '$scope', 'DataService', 'ModalService', MainCtrl];
