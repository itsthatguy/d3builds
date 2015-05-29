'use strict';

function FeedmeController($scope, SkillsService) {
  var allSkills = SkillsService.all();

  $scope.classes = _.uniq(_.pluck(allSkills, 'class'));
  $scope.skills = allSkills;

  $scope.showClassSkills = function(klass) {
    console.log(klass);
    $scope.skills = _.where(allSkills, {"class": klass});
  };
}

export default ['$scope', 'SkillsService', FeedmeController];
