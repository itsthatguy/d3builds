'use strict';

import SkillSlotDirective from './skillslot.directive';
import SkillSlotController from './skillslot.controller';

export default angular.module('d3builds.SkillSlot', [])
.directive('skillslot', SkillSlotDirective)
.controller('SkillSlotController', SkillSlotController);
