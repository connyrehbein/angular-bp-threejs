'use strict';

angular.module('threeJSApp')
  .factory('threeJSEngine', function() {

    var scene,
      camera,
      renderer,
      cube,
      xSpeed = 0.01,
      ySpeed = 0.01;

    var init = function(canvasElement, aspectSize) {
      console.log('initiating canvas');

      // Create a new scene object.
      scene = new THREE.Scene();

      // PerspectiveCamera( fov, aspect, near, far )
      camera = new THREE.PerspectiveCamera(75, aspectSize, 0.1, 1000);

      /*
      renderer infos:
        canvas — A Canvas where the renderer draws its output.
        precision — shader precision. Can be "highp", "mediump" or "lowp".
        alpha — Boolean, default is false.
        premultipliedAlpha — Boolean, default is true.
        antialias — Boolean, default is false.
        stencil — Boolean, default is true.
        preserveDrawingBuffer — Boolean, default is false.
        maxLights — Integer, default is 4.
      */

      renderer = new THREE.WebGLRenderer({
        canvas: canvasElement
      });

      // set resolution
      renderer.setSize(canvasElement.offsetWidth, canvasElement.offsetHeight);
      console.log('Render canvas with resolution of:' + canvasElement.offsetWidth + 'x' + canvasElement.offsetHeight);

      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
      });
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 5;

      var render = function() {
        requestAnimationFrame(render);

        cube.rotation.x += xSpeed;
        cube.rotation.y += ySpeed;

        renderer.render(scene, camera);
      };

      render();

    };


    var changeRotation = function(xValue, yValue) {
      xSpeed += xValue;
      ySpeed += yValue;
    };


    var lastRotation;
    var pause = function() {

      lastRotation = {
        x: xSpeed,
        y: ySpeed
      };

      xSpeed = 0;
      ySpeed = 0;
    };

    var resume = function() {
          xSpeed = lastRotation.x;
          ySpeed = lastRotation.y;
    };



    // Public API here
    return {
      init: init,
      changeRotation: changeRotation,
      pause: pause,
      resume: resume
    };

  });
