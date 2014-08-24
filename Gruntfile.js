'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'source',
                    open: {
                        target: 'http://localhost:9000'
                    }
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            html: {
                files: ['source/**/*.html']
            },
            scss: {
                files: ['source/scss/*.scss'],
                tasks: ['sass']
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'source/**/*.js',
                '!source/bower_components/**/*.js'
            ],
            options: {
                globalstrict: true,
                globals: {
                    "angular": true,
                    "module": true,
                    "console": true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'source/styles/tn-mag-glass.css': 'source/scss/tn-mag-glass.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('serve', ['jshint', 'connect:server', 'watch']);

    grunt.registerTask('default', ['serve']);
};