'use strict';

angular.module('threeJSApp')
  .controller('MenuCtrl', function ($scope, ThreeJSEngine) {

    $scope.isPaused = false;

    $scope.triggerPause = function(){
      if($scope.isPaused){
        ThreeJSEngine.resume();
      }
      else{
        ThreeJSEngine.pause();
      }
      $scope.isPaused = !$scope.isPaused;
    };

    $scope.faster = function(){
      ThreeJSEngine.changeRotation(0.01, 0.01);
    };
    $scope.slower = function(){
      ThreeJSEngine.changeRotation(-0.01, -0.01);
    };

  });
