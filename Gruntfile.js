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
            files: [
                '<%= jshint.files %>',
                'source/index.html'
            ],
            tasks: ['jshint']
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
                    "module": true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('serve', ['jshint', 'connect:server', 'watch']);

    grunt.registerTask('default', ['serve']);
};