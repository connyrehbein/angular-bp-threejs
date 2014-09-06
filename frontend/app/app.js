
/**
 * @ngdoc overview
 * @name TestApp
 * @description
 * # TestApp
 *
 * Main module of the application.
 */
  angular.module('threeJSApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ]);

  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       // templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
