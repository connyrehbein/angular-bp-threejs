'use strict';

angular.module('exampleApp')
  .controller('SelectionCtrl', function($scope, FruitManager) {

    $scope.manager = FruitManager;

    $scope.removeFruit = function($item) {
      $scope.manager.removeFruit($item);
    };

    $scope.isRightIndex = function(index){
        return index % 2;
    };
  });
