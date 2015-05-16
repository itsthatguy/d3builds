'use strict';

import SkillDirective from './skill.directive';
import SkillController from './skill.controller';

export default angular.module('d3builds.Skill', [])
.directive('skill', SkillDirective)
.controller('SkillController', SkillController);
