'use strict';

import OverlayService from './overlay.service';
import OverlayController from './overlay.controller';

export default angular.module('d3builds.Overlay', [])
.service('OverlayService', OverlayService)
.controller('OverlayController', OverlayController);
