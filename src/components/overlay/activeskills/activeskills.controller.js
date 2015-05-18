'use strict';

function ActiveSkillsController($scope, close, BuildsService, BuildsImporterService, SkillsService, OverlayService) {
  $scope.build = BuildsService.build;

  $scope.skills        = SkillsService.getSkills(BuildsService.build.class);
  $scope.activeSkills  = OverlayService.active;
  $scope.passiveSkills = OverlayService.passive;

  $scope.setActiveSkill = function(id, name) {
    var currentSkillSlot = OverlayService.currentSkillSlot;
    $scope.currentRunes  = _.find($scope.build['active'], {id: currentSkillSlot});
    BuildsService.setSkill('active', currentSkillSlot, name);
  };

  $scope.setActiveRuneForSkill = function(runeName, skillName) {
    BuildsService.setRune(OverlayService.currentSkillSlot, runeName);
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

export default ['$scope', 'close', 'BuildsService', 'BuildsImporterService', 'SkillsService', 'OverlayService', ActiveSkillsController];
