'use strict';

/* Fruit Model */

angular.module('exampleApp').factory('Fruit', function() {

  function Fruit(fruitJSON) {

    // private properties
    // import from json
    var name = fruitJSON.name;
    var origin = fruitJSON.origin;
    var unit = fruitJSON.unit;
    var price = parseInt(fruitJSON.price*100);

    // public functions that access private properties
    // getters return copies

    this.getName = function(){
      return name;
    };

    this.getOrigin = function() {
      return origin;
    };

    this.getUnit = function() {
      return unit;
    };

    this.getPrice = function() {
      return price/100;
    };
    // this.setPrice = function(newPrice) {
    //   price = parseInt(newPrice*100);
    // };

    // public properties
    this.fruitName = this.getName();
  }

  // public function

  // Fruit.prototype.commitEditingPrice = function() {
  //   var tempPrice = parseFloat(this.tempPrice);
  //   this.setPrice(tempPrice);
  // };

  return Fruit;
});
