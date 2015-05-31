'use strict';

function TopbarController($scope, ModalService) {
  $scope.showModal = function(type, id, name) {
    ModalService.showModal({
      templateUrl: "components/overlay/overlay." + type + ".html",
      controller: "OverlayController"
    }).then(function(modal) {
      modal.controller.blur('[ui-view="mainContent"]');
    });
  };
}

export default ['$scope', 'ModalService', TopbarController];
