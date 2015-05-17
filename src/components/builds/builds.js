'use strict';

import BuildsImporterService from './importer.service';
import BuildsService from './builds.service';

export default angular.module('d3builds.Builds', [])
.service('BuildsImporterService', BuildsImporterService)
.service('BuildsService', BuildsService);

