/* global _ */
'use strict';

var categoriesData = require('../../data/categories').categories;

function ActiveSkillsController($scope, slotId, skillName, runeName, close, BuildsService, ImporterService, SkillsService, OverlayService) {
  $scope.build  = BuildsService.build;

  $scope.slotId = slotId;
  $scope.currentSkillName = skillName;
  $scope.currentRuneName = runeName;
  $scope.categories = _.where(categoriesData, {class: 'Witch Doctor'});

  SkillsService.get('Witch Doctor')
  .then(function(data) {
    $scope.skills = data;
    $scope.selectCategory(_.find($scope.skills, {name: skillName}).category);
    $scope.$apply();
  });

  $scope.chooseSkill = function(pageName, skill) {
    $scope.currentSkillName = skill.name;
  };

  $scope.setActiveRuneForSlotId = function(runeName, slotId) {
    $scope.currentRuneName = runeName;
  };

  $scope.getRunesFromSkill = function(skill) {
    if (skill.name == $scope.activeSkill) {
      return skill.runes;
    }
  };

  $scope.closeModal = function(save) {
    if (save) {
      BuildsService.setActiveSkill(slotId, $scope.currentSkillName);
      BuildsService.setRune(slotId, $scope.currentRuneName);
    }

    OverlayService.closeModal(close, save);
  };

  $scope.selectCategory = function(category){
    $scope.currentCategory = category;
    $scope.currentSkills = _.where($scope.skills, {category: category});
  };
}

export default ['$scope', 'slotId', 'skillName', 'runeName', 'close', 'BuildsService', 'ImporterService', 'SkillsService', 'OverlayService', ActiveSkillsController];
