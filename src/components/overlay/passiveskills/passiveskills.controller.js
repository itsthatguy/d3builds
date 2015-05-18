'use strict';

function PassiveSkillsController($scope, BuildsService, BuildsImporterService, OverlayService) {
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
}

export default ['$scope', 'BuildsService', 'BuildsImporterService', 'OverlayService', PassiveSkillsController];
