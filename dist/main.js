/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mainMain = __webpack_require__(1);

	var _mainMain2 = _interopRequireDefault(_mainMain);

	var _componentsSkillSkill = __webpack_require__(2);

	var _componentsSkillSkill2 = _interopRequireDefault(_componentsSkillSkill);

	var _componentsOverlayOverlay = __webpack_require__(3);

	var _componentsOverlayOverlay2 = _interopRequireDefault(_componentsOverlayOverlay);

	angular.module('d3builds', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'angular.filter', 'angularModalService', 'd3builds.Main', 'd3builds.Skill', 'd3builds.Overlay', 'ui.router', 'mm.foundation']).run(function () {}).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('main', {
	    url: '/main',
	    abstract: true,
	    templateUrl: 'components/layouts/application.html' }).state('main.index', {
	    url: '',
	    views: {
	      mainContent: {
	        controller: 'MainController',
	        templateUrl: 'main/main.html'
	      }
	    }
	  }).state('otherwise', { url: '/main' });

	  $urlRouterProvider.otherwise('/main');
	}]).filter('keylength', function () {
	  return function (input) {
	    if (!angular.isObject(input)) {
	      throw Error('Usage of non-objects with keylength filter!!');
	    }
	    return Object.keys(input).length;
	  };
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsDataData = __webpack_require__(4);

	var _componentsDataData2 = _interopRequireDefault(_componentsDataData);

	var _topbarTopbar = __webpack_require__(5);

	var _topbarTopbar2 = _interopRequireDefault(_topbarTopbar);

	var _mainController = __webpack_require__(6);

	var _mainController2 = _interopRequireDefault(_mainController);

	'use strict';

	exports['default'] = angular.module('d3builds.Main', ['d3builds.Data', 'd3builds.Topbar']).controller('MainController', _mainController2['default']);
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _skillDirective = __webpack_require__(7);

	var _skillDirective2 = _interopRequireDefault(_skillDirective);

	var _skillController = __webpack_require__(8);

	var _skillController2 = _interopRequireDefault(_skillController);

	'use strict';

	exports['default'] = angular.module('d3builds.Skill', []).directive('skill', _skillDirective2['default']).controller('SkillController', _skillController2['default']);
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _overlayController = __webpack_require__(9);

	var _overlayController2 = _interopRequireDefault(_overlayController);

	'use strict';

	exports['default'] = angular.module('d3builds.Overlay', []).controller('OverlayController', _overlayController2['default']);
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dataService = __webpack_require__(13);

	var _dataService2 = _interopRequireDefault(_dataService);

	'use strict';

	exports['default'] = angular.module('d3builds.Data', []).service('DataService', _dataService2['default']);
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topbarDirective = __webpack_require__(11);

	var _topbarDirective2 = _interopRequireDefault(_topbarDirective);

	var _topbarController = __webpack_require__(12);

	var _topbarController2 = _interopRequireDefault(_topbarController);

	'use strict';

	exports['default'] = angular.module('d3builds.Topbar', []).directive('topbar', _topbarDirective2['default']).controller('TopbarController', _topbarController2['default']);
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	'use strict';

	function MainCtrl($rootScope, $scope, DataService, ModalService) {
	  DataService.get('skills').then(function (data) {
	    $rootScope.skills = data;

	    DataService.get('builds/1').then(function (data) {
	      $rootScope.build = data;
	    });
	  });

	  $scope.showModal = function (type, name) {
	    ModalService.showModal({
	      templateUrl: 'components/overlay/overlay.' + type + '.html',
	      controller: 'OverlayController'
	    }).then(function (modal) {
	      console.log(name);
	      modal.controller.setActiveSkill(name);
	      modal.controller.blur('[ui-view="mainContent"]');
	    });
	  };

	  $scope.exit = function () {
	    var gui = __webpack_require__(10);
	    var win = gui.Window.get();
	    win.close();
	  };
	}

	exports['default'] = ['$rootScope', '$scope', 'DataService', 'ModalService', MainCtrl];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	'use strict';

	exports['default'] = function () {
	  return {
	    scope: {
	      skillName: '=',
	      runeName: '=',
	      skillType: '@'
	    },
	    templateUrl: 'components/skill/skill.html',
	    replace: true,
	    controller: 'SkillController',
	    controllerAs: 'ctrl'
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	'use strict';

	function SkillController($scope) {
	  $scope.skillIcon = 'icon';
	}

	exports['default'] = ['$scope', SkillController];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	'use strict';

	function OverlayController($rootScope, $scope, close, DataService) {
	  var vague;

	  this.setActiveSkill = function (name) {
	    $scope.activeSkill = name;
	  };

	  this.blur = function (selector) {
	    vague = $(selector).Vague({
	      intensity: 0,
	      forceSVGUrl: false,
	      animationOptions: {
	        duration: 400,
	        easing: 'linear' // here you can use also custom jQuery easing functions
	      }
	    });

	    vague.animate(8);
	    $('.overlay').animate({
	      opacity: 1 }, 100);
	  };

	  $scope.closeModal = function (result) {
	    $('.overlay').animate({
	      opacity: 0 }, 200, function () {
	      close(result, 800);
	    });

	    vague.animate(0).done(function () {
	      vague.unblur();
	    });
	  };

	  $scope.passive = function (el) {
	    return console.log(el);
	  };
	}

	exports['default'] = ['$rootScope', '$scope', 'close', 'DataService', OverlayController];
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("nw.gui");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	'use strict';

	exports['default'] = function () {
	  return {
	    scope: {},
	    templateUrl: 'main/topbar/topbar.html',
	    replace: true,
	    controller: 'TopbarController',
	    controllerAs: 'ctrl'
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	'use strict';

	function TopbarController($scope) {
	  return $scope;
	}

	exports['default'] = ['$scope', TopbarController];
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	'use strict';

	function DataService($http) {
	  return {
	    get: function get(filename) {
	      return $http.get('data/' + filename + '.json').then(function (res) {
	        return res.data;
	      });
	    }
	  };
	}

	exports['default'] = ['$http', DataService];
	module.exports = exports['default'];

/***/ }
/******/ ]);