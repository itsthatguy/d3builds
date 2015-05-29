'use strict';

function ActiveSkillsController($scope, slotId, skillName, close, BuildsService, ImporterService, SkillsService, OverlayService) {
  $scope.build         = BuildsService.build;

  SkillsService.get('Witch Doctor')
  .then(function(data) {
    $scope.skills = data;
    $scope.$apply();
  });

  $scope.chooseSkill = function(pageName, skill) {
    $scope.selectedSkill = skill;
  };

  $scope.setActiveRuneForSkill = function(runeName, skillName) {
    // BuildsService.setRune(OverlayService.currentSkillSlot, runeName);
  };

  $scope.getRunesFromSkill = function(skill) {
    console.log(skill.runes);
    if (skill.name == $scope.activeSkill) {
      return skill.runes;
    }
  };

  $scope.closeModal = function(result) {
    OverlayService.closeModal(close, result);
  };
}

export default ['$scope', 'slotId', 'skillName', 'close', 'BuildsService', 'ImporterService', 'SkillsService', 'OverlayService', ActiveSkillsController];
