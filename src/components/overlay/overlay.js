'use strict';

import OverlayService from './overlay.service';
import OverlayController from './overlay.controller';
import OwlCarousel from '../owl.carousel/owl.carousel';

export default angular.module('d3builds.Overlay', [
  'owl.carousel'
  ])
.service('OverlayService', OverlayService)
.controller('OverlayController', OverlayController);
