'use strict';

angular.module('threeJSApp')
  .controller('SceneCtrl', function ($scope, ThreeJSEngine) {

    $scope.threejs = ThreeJSEngine;
  });
