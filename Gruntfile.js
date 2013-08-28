/*global module:false*/
module.exports = function (grunt) {

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-compass');


    // Default task.
    grunt.registerTask('default', ['clean', 'karma', 'jade', 'compass']);

    // Travis CI task.
    grunt.registerTask('travis', ['clean', 'karma']);

    // Project configuration.
    grunt.initConfig({




        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
            '* License: <%= pkg.license %> */\n\n\n',

        src: {
            js: ['src/**/*.js'],
            css: ['src/**/*.css']
        },



        // Task configuration.

        watch: {
            files: ['src/**/*', 'test/**/*'],
            tasks: ['default'],
            options: {
                livereload: true
            }
        },

        clean: {build: ['build']},

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        jade: {
            index: {
                files: {
                    "build/index.html": ["src/index.jade"]
                },
                options: {
                    client: false,
                    pretty: true
                }
            },
            views: {
                files: {
                    'build/views': ['src/views/**/*.jade']
                },
                options: {
                    client: false,
                    pretty: true,
                    basePath: 'src/views'
                }
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'build/css'
                }
            }
        }


    });
};
