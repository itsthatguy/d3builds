'use strict';

function OverlayController($scope, close, BuildsService, OverlayService, DataService) {
  $scope.closeModal = function(result, close) {
    OverlayService.closeModal(result, close);
  };
}

export default ['$scope', 'close', 'BuildsService', 'OverlayService', 'DataService', OverlayController];
