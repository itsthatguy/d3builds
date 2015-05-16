'use strict';

import Main from './main/main';
import Skill from './components/skill/skill';
import Overlay from './components/overlay/overlay';

angular.module('d3builds', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'angular.filter',
  'angularModalService',
  'd3builds.Main',
  'd3builds.Skill',
  'd3builds.Overlay',
  'ui.router',
  'mm.foundation'
])

.run(function() { })

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
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
    .state('otherwise', {url: '/main'});

    $urlRouterProvider.otherwise('/main');

}])
.filter('keylength', function(){
  return function(input){
    if(!angular.isObject(input)){
      throw Error("Usage of non-objects with keylength filter!!")
    }
    return Object.keys(input).length;
  }
});
