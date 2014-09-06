# Angular Boilerplate - threejs example

### Setup
The base setup is always the same and based on a mix of the yeoman generator-angular(LINK) and generator-angular-fullstack(LINK).

**Angular** dependencies with **HTML**, **SASS** with **Bourbon**, **ui-bootstrap**, **bootstrap css**, **font-awesome css**, and **normalise.css** ( no jquery ).

The different branches each contain another example.


### threejs example

The master branch contains a moving 3d cube example, implemented with angular and threejs.
The scene logic is stored in app/logic/ThreeJSEngine (factory).

The menu and header are separate components with the respective files under components/componentname

The threejs code is based on and explained at the :  [threejs getting started section](http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene)


### Installing

##### Install npm (the node package manager)

[http://nodejs.org/
](http://nodejs.org)

(tested with npm 1.4.24)

##### Install bower and grunt globally


`$ npm install -g grunt-cli bower`

If you have installed Grunt globally in the past, you will need to remove it first: npm uninstall -g grunt

##### Load the npm modules
(mostly for the grunt tasks and sass compiling)

`$ npm update`

##### Load the bower modules

(angular,bootstrap,...)

`$ bower update`

##### Optional: Sass
Depending on the grunt sass task, installing ruby's sass compiler might be neccessary

`gem install sass`

### Run

run `$ grunt serve` in the root directory
this starts a server at port 9000 with livereload functionality

### Build

run `$ grunt build --force` to build a version for deployment

Note: the `--force` is neccessary for now, otherwise the useminprepare in grunt aborts the build. Haven't found a solution for that yet.