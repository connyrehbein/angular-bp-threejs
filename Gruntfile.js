// Generated on 2014-08-13 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  var appConfig = {
    // configurable paths
    app: 'frontend',
    build: 'dist',
    port: '9000',
    moduleName : 'threeJSApp'

  };

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn',
    injector: 'grunt-asset-injector'
  });

  // Load grunt tasks automatically
  // require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks

  grunt.initConfig({

    // Configurable paths for the application

    // Watches files for changes and runs tasks based on the changed files
    //
    appConfig: appConfig,
    watch: {
      injectCss: {
        files: [
          '<%= appConfig.app %>/{app,components}/**/*.css'
        ],
        tasks: ['injector:css']
      },
      jsTest: {
        files: [
          '<%= appConfig.app %>/{app,components}/**/*.spec.js',
          '<%= appConfig.app %>/{app,components}/**/*.mock.js'
        ],
        tasks: ['newer:jshint:all', 'karma']
      },
      injectSass: {
        files: [
          '<%= appConfig.app %>/{app,components}/**/*.{scss,sass}'
        ],
        tasks: ['injector:sass']
      },
      sass: {
        files: [
          '<%= appConfig.app %>/{app,components}/**/*.{scss,sass}'
        ],
        tasks: ['sass', 'autoprefixer']
      },

      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '{.tmp,<%= appConfig.app %>}/{app,components}/**/*.css',
          '{.tmp,<%= appConfig.app %>}/{app,components}/**/*.html',
          '{.tmp,<%= appConfig.app %>}/*.html',
          '{.tmp,<%= appConfig.app %>}/{app,components}/**/*.js',
          '!{.tmp,<%= appConfig.app %>}{app,components}/**/*.spec.js',
          '!{.tmp,<%= appConfig.app %>}/{app,components}/**/*.mock.js',
          '<%= appConfig.app %>/assets/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    open: {
      server: {
        url: 'http://localhost:<% connect.options.port %>'
      }
    },
    // bower: {
    //   files: ['bower.json'],
    //   tasks: ['wiredep']
    // },
    // js: {
    //   files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
    //   tasks: ['newer:jshint:all'],
    //   options: {
    //     livereload: '<%= connect.options.livereload %>'
    //   }
    // },
    // jsTest: {
    //   files: ['test/spec/{,*/}*.js'],
    //   tasks: ['newer:jshint:test', 'karma']
    // },
    // scripts: {
    //   files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
    //   tasks: ['sass']
    // },
    // gruntfile: {
    //   files: ['Gruntfile.js']
    // },



    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '<%= appConfig.app %>/.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '<%= appConfig.app %>/{app,components}/**/*.js',
        '!<%= appConfig.app %>/{app,components}/**/*.spec.js',
        '!<%= appConfig.app %>/{app,components}/**/*.mock.js'
      ],
      test: {
        src: [
          '<%= appConfig.app %>/{app,components}/**/*.spec.js',
          '<%= appConfig.app %>/{app,components}/**/*.mock.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= appConfig.build %>/*',
            '!<%= appConfig.build %>/.git*',
            '!<%= appConfig.build %>/.openshift',
            '!<%= appConfig.build %>/Procfile'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/',
          src: '{,*/}*.css',
          dest: '.tmp/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      target: {
        src: '<%= appConfig.app %>/index.html',
        ignorePath: '<%= appConfig.app %>/',
        exclude: ['/json3/', '/es5-shim/']
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= appConfig.build %>/{,*/}*.js',
            '<%= appConfig.build %>/{,*/}*.css',
            '<%= appConfig.build %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= appConfig.build %>/assets/fonts/*'
          ]
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    // compass: {
    //   options: {
    //     sassDir: '<%= yeoman.app %>/styles',
    //     cssDir: '.tmp/styles',
    //     generatedImagesDir: '.tmp/images/generated',
    //     imagesDir: '<%= yeoman.app %>/images',
    //     javascriptsDir: '<%= yeoman.app %>/scripts',
    //     fontsDir: '<%= yeoman.app %>/styles/fonts',
    //     importPath: './bower_components',
    //     httpImagesPath: '/images',
    //     httpGeneratedImagesPath: '/images/generated',
    //     httpFontsPath: '/styles/fonts',
    //     relativeAssets: false,
    //     assetCacheBuster: false,
    //     raw: 'Sass::Script::Number.precision = 10\n'
    //   },
    //   dist: {
    //     options: {
    //       generatedImagesDir: '<%= appConfig.build %>/images/generated'
    //     }
    //   },
    //   server: {
    //     options: {
    //       debugInfo: true
    //     }
    //   }
    // },

    // sass: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '<%= yeoman.app %>/styles',
    //       src: ['*.scss'],
    //       dest: '.tmp/styles',
    //       ext: '.css'
    //     }]
    //   },
    //   server: {
    //     options: {
    //       debugInfo: true
    //     }
    //   }
    // },
    // // Renames files for browser caching purposes
    // filerev: {
    //   dist: {
    //     src: [
    //       '<%= appConfig.build %>/scripts/{,*/}*.js',
    //       '<%= appConfig.build %>/styles/{,*/}*.css',
    //       '<%= appConfig.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= appConfig.build %>/styles/fonts/*'
    //     ]
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= appConfig.app %>/index.html'],
      options: {
        dest: '<%= appConfig.build %>'
      }
    },


    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= appConfig.build %>/{,*/}*.html'],
      css: ['<%= appConfig.build %>/{,*/}*.css'],
      js: ['<%= appConfig.build %>/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= appConfig.build %>',
          '<%= appConfig.build %>/assets/images'
        ],
        // This is so we update image references in our ng-templates
        patterns: {
          js: [
            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
          ]
        }
      }
    },

    // The following *-min tasks will produce minified files in the run folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= appConfig.build %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= appConfig.build %>/scripts/scripts.js': [
    //         '<%= appConfig.build %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= appConfig.build %>/assets/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= appConfig.build %>/assets/images'
        }]
      }
    },

    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat',
          src: '*/**.js',
          dest: '.tmp/concat'
        }]
      }
    },

    // Package all the html partials into a single javascript payload
    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        // appConfig.moduleName is inserted here, otherwise, the templates are not loaded correctly
        module: 'moduleName',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        usemin: 'app/app.js'
      },
      main: {
        cwd: '<%= appConfig.app %>',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/templates.js'
      },
      tmp: {
        cwd: '.tmp',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/tmp-templates.js'
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= appConfig.build %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appConfig.app %>',
          dest: '<%= appConfig.build %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'assets/images/{,*/}*.{webp}',
            'assets/fonts/**/*',
            'index.html'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= appConfig.build %>/assets/images',
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= appConfig.build %>',
          src: [
            'package.json'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= appConfig.app %>',
        dest: '.tmp/',
        src: ['{app,components}/**/*.css']
      }
    },


    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'sass',
      ],
      test: [
        'sass',
      ],
      dist: [
        'sass',
        'imagemin',
        'svgmin'
      ]
    },
    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    // Compiles Sass to CSS
    //
    sass: {
      options: {
        includePaths: require('node-bourbon').with(
          '<%= appConfig.app %>/bower_components',
          '<%= appConfig.app %>/app',
          '<%= appConfig.app %>/components')
      },
      dist: {
        files: {
          '.tmp/app/app.css': '<%= appConfig.app %>/app/app.scss'
        }
      }
    },

    injector: {
      options: {

      },
      // Inject application script files into index.html (doesn't include bower)
      scripts: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/frontend/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= appConfig.app %>/index.html': [
            ['{.tmp,<%= appConfig.app %>}/{app,components}/**/*.js',
              '!{.tmp,<%= appConfig.app %>}/app/app.js',
              '!{.tmp,<%= appConfig.app %>}/{app,components}/**/*.spec.js',
              '!{.tmp,<%= appConfig.app %>}/{app,components}/**/*.mock.js'
            ]
          ]
        }
      },

      // Inject component scss into app.scss
      sass: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/frontend/app/', '');
            filePath = filePath.replace('/frontend/components/', '');
            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector',
          endtag: '// endinjector',

        },
        files: {
          '<%= appConfig.app %>/app/app.scss': [
            '<%= appConfig.app %>/{app,components}/**/*.{scss,sass}',
            '!<%= appConfig.app %>/app/app.{scss,sass}'
          ]
        }
      },

      // Inject component css into index.html
      css: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<link rel="stylesheet" href="' + filePath + '">';
          },
          starttag: '<!-- injector:css -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= appConfig.app %>/index.html': [
            '<%= appConfig.app %>/{app,components}/**/*.css',
            '.tmp/**/*.css'
          ]
        }
      }
    },


  });

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    if (target === 'debug') {
      return grunt.task.run([
        'clean:server',
        'injector:sass',
        'concurrent:server',
        'injector',
        'wiredep',
        'autoprefixer'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'injector:sass',
      // 'sass',
      'concurrent:server',
      'injector',
      'wiredep',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('serveBuild', function() {
    return grunt.task.run(['build', 'connect:dist:keepalive']);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // grunt.registerTask('test', function(target) {
  //   if (target === 'server') {
  //     return grunt.task.run([
  //       'env:all',
  //       'env:test',
  //       'mochaTest'
  //     ]);
  //   } else if (target === 'client') {
  //     return grunt.task.run([
  //       'clean:server',
  //       'env:all',
  //       'injector:sass',
  //       'concurrent:test',
  //       'injector',
  //       'autoprefixer',
  //       'karma'
  //     ]);
  //   } else if (target === 'e2e') {
  //     return grunt.task.run([
  //       'clean:server',
  //       'env:all',
  //       'env:test',
  //       'injector:sass',
  //       'concurrent:test',
  //       'injector',
  //       'wiredep',
  //       'autoprefixer',
  //       'express:dev',
  //       'protractor'
  //     ]);
  //   } else grunt.task.run([
  //     'test:server',
  //     'test:client'
  //     // karma?
  //   ]);
  // });

  grunt.registerTask('test', function() {
      grunt.log.warn('The `test` task might not work, as the boilerplate changed often');
      grunt.task.run([
          'clean:server',
          'concurrent:test',
          'autoprefixer',
          'connect:test',
          'karma'
        ]);
      });

    grunt.registerTask('build', [
      'clean:dist',
      'injector:sass',
      'concurrent:dist',
      'injector',
      'wiredep',
      'useminPrepare',
      'autoprefixer',
      'ngtemplates',
      'concat',
      'ngAnnotate',
      'copy:dist',
      'cdnify',
      'cssmin',
      'uglify',
      'rev',
      'usemin'
    ]);

    grunt.registerTask('default', [
      'newer:jshint',
      // 'test',
      'build'
    ]);
  };
