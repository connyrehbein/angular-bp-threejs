'use strict';

angular.module('threeJSApp')
  .directive('threejsMenu', function () {
    return {
      controller:'MenuCtrl',
      templateUrl: 'components/menu/menu.html',
      restrict: 'E'
    };
  });
