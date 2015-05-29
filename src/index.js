'use strict';

import Main from './main/main';
import Feedme from './feedme/feedme';
import Overlay from './components/overlay/overlay';
import Builds from './components/builds/builds';

angular.module('d3builds', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'angular.filter',
  'angularModalService',
  'd3builds.Main',
  'd3builds.SkillSlot',
  'd3builds.Builds',
  'd3builds.Overlay',
  'd3builds.Feedme',
  'ui.router',
  'mm.foundation'
])

.run(function() { })

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('feedme', {
      url: '/feedme',
      abstract: true,
      templateUrl: 'components/layouts/application.html',
    })
    .state('feedme.index', {
      url: '',
      views: {
        mainContent: {
          controller: 'FeedmeController',
          templateUrl: 'feedme/feedme.html'
        }
      }
    })

    .state('main', {
      url: '/',
      abstract: true,
      templateUrl: 'components/layouts/application.html',
    })

    .state('main.index', {
      url: '',
      views: {
        mainContent: {
          controller: 'MainController',
          templateUrl: 'main/main.html'
        }
      }
    })
    .state('otherwise', {url: '/'});

    $urlRouterProvider.otherwise('/');

}])
.filter('keylength', function(){
  return function(input){
    if(!angular.isObject(input)){
      throw Error("Usage of non-objects with keylength filter!!")
    }
    return Object.keys(input).length;
  }
});
