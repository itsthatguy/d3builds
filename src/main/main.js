'use strict';

import Data                    from '../components/data/data';
import Skills                  from '../components/skills/skills';

import Topbar                  from './topbar/topbar';

import MainController          from './main.controller';
import SkillSlot               from './skillslot/skillslot';
import ClassesController       from './classes/classes.controller';
import ActiveSkillsController  from './activeskills/activeskills.controller';
import PassiveSkillsController from './passiveskills/passiveskills.controller';
import ImporterService         from './importer/importer.service';
import ImporterController      from './importer/importer.controller';

export default angular.module('d3builds.Main', [
  'd3builds.Data',
  'd3builds.SkillSlot',
  'd3builds.Skills',
  'd3builds.Topbar'
])
.service('ImporterService', ImporterService)
.controller('ImporterController', ImporterController)
.controller('ClassesController', ClassesController)
.controller('ActiveSkillsController', ActiveSkillsController)
.controller('PassiveSkillsController', PassiveSkillsController)
.controller('MainController', MainController);
