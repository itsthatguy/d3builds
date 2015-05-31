'use strict';

function ClassesController($scope, close, SkillsService, OverlayService) {

  $scope.classes = _.pluck(SkillsService.allSkills, 'name');

  $scope.closeModal = function(result) {
    OverlayService.closeModal(close);
  };
}

export default ['$scope', 'close', 'SkillsService', 'OverlayService', ClassesController];
