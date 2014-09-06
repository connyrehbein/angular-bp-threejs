'use strict';

angular.module('exampleApp')
  .controller('SearchCtrl', function($scope, FruitManager) {

    $scope.manager = FruitManager;

    $scope.selectFruit = function($item) {
      $scope.manager.selectFruit($item);
    };

  });
