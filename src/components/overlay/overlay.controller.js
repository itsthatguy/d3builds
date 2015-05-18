'use strict';

function OverlayController($scope, close, BuildsService, BuildsImporterService, OverlayService, DataService) {
  $scope.importBuild = function(formData) {
    BuildsImporterService.importBuild(formData.url);
  };

  $scope.closeModal = function(result, close) {
    OverlayService.closeModal(result, close);
  };
}

export default ['$scope', 'close', 'BuildsService', 'BuildsImporterService', 'OverlayService', 'DataService', OverlayController];
