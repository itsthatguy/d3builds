'use strict';

export default function() {
  return {
    scope: {
      skillName: '=',
      runeName: '=',
      skillType: '@'
    },
    templateUrl: 'components/skill/skill.html',
    replace: true,
    controller: 'SkillController',
    controllerAs: 'ctrl'
  };
}
