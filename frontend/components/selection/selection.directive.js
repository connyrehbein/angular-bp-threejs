'use strict';

angular.module('exampleApp')
  .directive('bpSelection', function () {
    return {
      controller:'SelectionCtrl',
      templateUrl: 'components/selection/selection-list.html',
      restrict: 'E'
    };
  });
