module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        target: './',

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/css/main.css': 'sass/main.scss'
                }
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'build/css/*.css'
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'build/css/',
                src: ['*.css', '!*.min.css'],
                dest: '<%= target %>/css/',
                ext: '.min.css'
            }
        },

        webfont: {
            icons: {
                src: 'icons/svg/**/*.svg',
                dest: 'build/fonts',
                destCss: 'sass/core',
                options: {
                    htmlDemo: false,
                    relativeFontPath: '../fonts/',
                    stylesheet: 'scss',
                    template: 'icons/css/custom.css',
                    codepointsFile: 'icons/css/codepoints.json'
                }
            }
        },

        clean: {
            fonts: {
                src: ['build/fonts', '<%= target %>/fonts']
            },
            options: {
                'force': true
            }
        },

        copy: {
            iconfont: {
                cwd: 'build/fonts/',
                src: '**/*.*',
                expand: true,
                dest: '<%= target %>/fonts/',
                filter: 'isFile'
            },
            fonts: {
                cwd: 'fonts',
                src: '**/*.*',
                expand: true,
                dest: '<%= target %>/fonts/',
                filter: 'isFile'
            }
        },

        notify: {
            css: {
                options: {
                    title: '✓ Task complete!',
                    message: 'CSS'
                }
            },
            fonts: {
                options: {
                    title: '✓ Task complete!',
                    message: 'Fonts'
                }
            },
            icons: {
                options: {
                    title: '✓ Task complete!',
                    message: 'Icons'
                }
            }
        },

        watch: {
            options: {
                livereload: false
            },
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['css', 'notify:css'],
                options: {
                    spawn: false,
                }
            },
            fonts: {
                files: ['fonts/**', 'icons/**'],
                tasks: ['fonts', 'notify:fonts']
            }
        }
    });

    //  PLUGINS
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    //  COMBINED TASKS
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('fonts', ['clean:fonts', 'webfont', 'copy:iconfont', 'copy:fonts']);
    grunt.registerTask('css', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('build', ['fonts', 'css']);

};
