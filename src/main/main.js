'use strict';

import Data from '../components/data/data';
import Skills from '../components/skills/skills';
import Topbar from './topbar/topbar';
import MainController from './main.controller';

export default angular.module('d3builds.Main', [
  'd3builds.Data',
  'd3builds.Skills',
  'd3builds.Topbar'
])
.controller('MainController', MainController);
