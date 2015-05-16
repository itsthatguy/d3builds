'use strict';

import OverlayController from './overlay.controller';
import OwlCarousel from '../owl.carousel/owl.carousel';

export default angular.module('d3builds.Overlay', ['owl.carousel'])
.controller('OverlayController', OverlayController);
