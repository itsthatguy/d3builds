'use strict';

export default function() {
  return {
    scope: {
      skillName: '=',
      runeName: '=',
      skillType: '@'
    },
    templateUrl: 'main/skillslot/skillslot.html',
    replace: true,
    controller: 'SkillSlotController',
    controllerAs: 'ctrl'
  };
}
