'use strict';

angular.module('threeJSApp')
  .directive('threejsScene', function() {
    return {
      controller:'SceneCtrl',
      templateUrl: 'components/scene/scene.html',
      restrict: 'E',
      link: function(scope, elem) {
        var canvas = elem.children('#scene-canvas')[0];
        var aspect = canvas.offsetWidth / canvas.offsetHeight;
        scope.threejs.init(canvas, aspect);
      }
    };
  });