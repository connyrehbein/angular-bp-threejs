'use strict';

angular.module('exampleApp').service('FruitManager', function($q, Fruit) {

  var selectedFruits = [];
  var availableFruits = [];
  var isLoadingFruits = false;

  var fruitJSON = [{
    name: 'Banana',
    origin: 'India',
    price: 1.99,
    unit: 'pound'
  }, {
    name: 'Mango',
    origin: 'Thailand',
    price: 0.3212,
    unit: 'piece'
  }, {
    name: 'Lemon',
    origin: 'China',
    price: 0.49,
    unit: 'piece'
  },
    {
    name:'Tomato',
    origin:'US',
    price:1.75,
    unit:'pound'
  },
    {
    name:'Chilli Pepper',
    origin:'US',
    price:1.75,
    unit:'pound'
  },
    {
    name:'Pumpkin',
    origin:'US',
    price:1.75,
    unit:'pound'
  },
    {
    name:'Grapefruit',
    origin:'US',
    price:1.75,
    unit:'pound'
  },
    {
    name:'Apple',
    origin:'US',
    price:1.75,
    unit:'pound'
  },
    {
    name:'Strawberry',
    origin:'US',
    price:1.75,
    unit:'pound'
  }];

  var convertJsonToFruitList = function(fruitJsonList) {
    var list = [];
    for (var i = 0; i < fruitJsonList.length; i++) {
      var fruit = new Fruit(fruitJsonList[i]);
      list.push(fruit);
    }
    return list;
  };

  var loadAvailableFruits = function() {
    isLoadingFruits = true;
    // lazy import/load fruits

    if (availableFruits.length > 0) {
      isLoadingFruits = false;
      return availableFruits;
    } else {
      availableFruits = convertJsonToFruitList(fruitJSON);
      isLoadingFruits = false;
      return availableFruits;
    }
  };

  // load on initialization of manager
  loadAvailableFruits();

  this.selectedFruits = function() {
    return selectedFruits;
  };

  this.availableFruits = function() {
    return availableFruits;
  };

  this.isLoadingFruits = function() {
    return isLoadingFruits;
  };

  this.selectFruit = function(selectedFruit) {
    console.log('fruitmgr: select Fruit:' + selectedFruit.getName());
    selectedFruits.push(selectedFruit);

    // update available fruit List, so that selected fruits are not shown in typeahead
    availableFruits = _.reject(availableFruits, function(fruit) {
      return fruit.getName() === selectedFruit.getName();
    });
  };

  this.removeFruit = function(selectedFruit) {
    console.log('fruitmgr: remvoving Fruit:' + selectedFruit.getName());
    availableFruits.push(selectedFruit);

    // update selected materialList, so that the fruit is not selected anymore
    selectedFruits = _.reject(selectedFruits, function(fruit) {
      return fruit.getName() === selectedFruit.getName();
    });
  };


});
