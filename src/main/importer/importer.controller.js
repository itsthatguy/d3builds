function ImporterController($scope, close, ImporterService, OverlayService) {

  $scope.importBuild = function(formData) {
    ImporterService.importBuild(formData.url);
  };

  $scope.closeModal = function(result) {
    OverlayService.closeModal(close);
  };
}

export default ['$scope', 'close', 'ImporterService', 'OverlayService', ImporterController];
