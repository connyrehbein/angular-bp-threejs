angular.module("threeJSApp",["ngResource","ngRoute","ui.bootstrap"]),angular.module("threeJSApp").factory("ThreeJSEngine",function(){var a,b,c,d,e,f=.01,g=.01,h=function(e,h){console.log("initiating canvas"),a=new THREE.Scene,b=new THREE.PerspectiveCamera(75,h,.1,1e3),c=new THREE.WebGLRenderer({canvas:e}),c.setSize(e.offsetWidth,e.offsetHeight),console.log("Render canvas with resolution of:"+e.offsetWidth+"x"+e.offsetHeight);var i=new THREE.BoxGeometry(1,1,1),j=new THREE.MeshBasicMaterial({color:65280});d=new THREE.Mesh(i,j),a.add(d),b.position.z=5;var k=function(){requestAnimationFrame(k),d.rotation.x+=f,d.rotation.y+=g,c.render(a,b)};k()},i=function(a,b){f+=a,g+=b},j=function(){e={x:f,y:g},f=0,g=0},k=function(){f=e.x,g=e.y};return{init:h,changeRotation:i,pause:j,resume:k}}),angular.module("threeJSApp").controller("MenuCtrl",["$scope","ThreeJSEngine",function(a,b){a.isPaused=!1,a.triggerPause=function(){a.isPaused?b.resume():b.pause(),a.isPaused=!a.isPaused},a.faster=function(){b.changeRotation(.01,.01)},a.slower=function(){b.changeRotation(-.01,-.01)}}]),angular.module("threeJSApp").directive("threejsMenu",function(){return{controller:"MenuCtrl",templateUrl:"components/menu/menu.html",restrict:"E"}}),angular.module("threeJSApp").controller("SceneCtrl",["$scope","ThreeJSEngine",function(a,b){a.threejs=b}]),angular.module("threeJSApp").directive("threejsScene",function(){return{controller:"SceneCtrl",templateUrl:"components/scene/scene.html",restrict:"E",link:function(a,b){var c=b.children("#scene-canvas")[0],d=c.offsetWidth/c.offsetHeight;a.threejs.init(c,d)}}}),angular.module("threeJSApp").run(["$templateCache",function(a){"use strict";a.put("components/header/header.html","<div><h1>Angular Boilerplate - ThreeJS example</h1></div>"),a.put("components/menu/menu.html",'<section><header><h3>Controls</h3></header><div><form><!-- slower button --><button ng-click=slower() class="btn btn-default" ng-hide=isPaused><i class="fa fa-backward"></i></button> <!-- pause/resumen button --> <button ng-click=triggerPause() class="btn btn-default"><i ng-show=isPaused class="fa fa-play"></i> <i ng-hide=isPaused class="fa fa-pause"></i></button> <!-- faster button --> <button ng-click=faster() class="btn btn-default" ng-hide=isPaused><i class="fa fa-forward"></i></button></form></div></section>'),a.put("components/scene/scene.html","<canvas id=scene-canvas></canvas>")}]);