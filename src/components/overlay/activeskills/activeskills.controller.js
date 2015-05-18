'use strict';

function ActiveSkillsController($scope, close, BuildsService, BuildsImporterService, SkillsService, OverlayService) {
  $scope.build = BuildsService.build;

  $scope.skills        = SkillsService.getSkills(BuildsService.build.class);
  $scope.activeSkills  = OverlayService.active;
  $scope.passiveSkills = OverlayService.passive;
  $scope.currentSkillSlot = OverlayService.currentSkillSlot;

  $scope.setActiveSkill = function(pageId, skill) {
    var skillSet = _.find($scope.skills['active_skills'], {id: pageId}).skills;
    $scope.currentSkillPage = pageId;
    $scope.currentSkill = _.find(skillSet, {name: skill.name});
    BuildsService.setSkill('active', $scope.currentSkillSlot, skill.name);
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
