'use strict';

function ActiveSkillsController($scope, close, BuildsService, BuildsImporterService, OverlayService) {
  $scope.build = BuildsService.build;

  $scope.activeSkills  = OverlayService.active;
  $scope.passiveSkills = OverlayService.passive;

  $scope.currentRunes  = _.find($scope.build['active'], {id: OverlayService.currentSkillId});

  $scope.setActiveSkill = function(id, name) {
    BuildsService.setSkill('active', OverlayService.currentSkillId, name);
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

  $scope.closeModal = function(result) {
    OverlayService.closeModal(close);
  };
}

export default ['$scope', 'close', 'BuildsService', 'BuildsImporterService', 'OverlayService', ActiveSkillsController];
