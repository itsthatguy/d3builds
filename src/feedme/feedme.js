'use strict';

import Skills                  from '../components/skills/skills';
import FeedmeController        from './feedme.controller';
import Owl                     from '../components/owl.carousel/owl.carousel'

export default angular.module('d3builds.Feedme', [
  'd3builds.Skills',
  'owl.carousel'
])
.controller('FeedmeController', FeedmeController)
