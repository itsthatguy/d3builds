'use strict';

import TopbarDirective from './topbar.directive';
import TopbarController from './topbar.controller';

export default angular.module('d3builds.Topbar', [
  'd3builds.Builds'
])
.directive('topbar', TopbarDirective)
.controller('TopbarController', TopbarController);
