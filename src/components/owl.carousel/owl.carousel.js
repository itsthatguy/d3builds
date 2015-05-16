'use strict';

export default angular.module('owl.carousel', [])
.directive("owlCarousel", function() {
  return {
    restrict: 'E',
    transclude: false,
    link: function (scope) {
      scope.initCarousel = function(element) {
        // provide any default options you want
        var defaultOptions = {
          nav: true,
          items: 1,
          loop: false
        };
        var customOptions = scope.$eval($(element).attr('data-options'));
        // combine the two options objects
        for(var key in customOptions) {
          defaultOptions[key] = customOptions[key];
        }
        // init carousel
        var owl = $(element).owlCarousel(defaultOptions);
      };
    }
  };
})
.directive('owlCarouselItem', [function() {
  return {
    restrict: 'A',
    transclude: false,
    link: function(scope, element) {
      // wait for the last item in the ng-repeat then call init
      if(scope.$last) {
        scope.initCarousel(element.parent());
      }
    }
  };
}]);
