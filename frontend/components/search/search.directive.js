'use strict';

angular.module('exampleApp')
  .directive('bpSearch', function () {
    return {
      controller:'SearchCtrl',
      templateUrl: 'components/search/search.html',
      restrict: 'E'
    };
  });
