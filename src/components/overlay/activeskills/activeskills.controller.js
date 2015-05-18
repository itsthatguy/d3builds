'use strict';

function OverlayController($scope, BuildsService, BuildsImporterService, OverlayService) {
  $scope.pages = {}
  $scope.build = BuildsService.build;

  $scope.activeSkills = OverlayService.active;
  $scope.passiveSkills = OverlayService.passive;

  $scope.setActiveSkill = function(id, name) {
    BuildsService.setSkill('active', id, name);
  };

  $scope.setActiveRuneForSkill = function(runeName, skillName) {
    BuildsService.setRune(id, name);
  };

  $scope.getRunesFromSkill = function(skill) {
    console.log(skill.runes);
    if (skill.name == $scope.activeSkill) {
      return skill.runes;
    }
  }

  $scope.closeModal = function(result, close) {
    OverlayService.closeModal(result, close);
  };
}

export default ['$scope', 'BuildsService', 'BuildsImporterService', 'OverlayService', OverlayController];
