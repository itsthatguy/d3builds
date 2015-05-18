'use strict';

import OverlayService from './overlay.service';
import ActiveSkillsController from './activeskills/activeskills.controller';
import PassiveSkillsController from './passiveskills/passiveskills.controller';
import OverlayController from './overlay.controller';
import OwlCarousel from '../owl.carousel/owl.carousel';

export default angular.module('d3builds.Overlay', [
  'owl.carousel'
])
.service('OverlayService', OverlayService)
.controller('OverlayController', OverlayController)
.controller('activeSkillsController', ActiveSkillsController)
.controller('passiveSkillsController', PassiveSkillsController);
