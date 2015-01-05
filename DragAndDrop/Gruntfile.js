/**
 * Created by Wei-Jye on 1/3/2015.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        './*.html',
                        './*.js',
                        '*/**/*.html',
                        '*/**/*.js'
                    ]
                },
                options: {
                    server: {
                        baseDir: './src',
                        index: 'index.html'
                    },
                    logPrefix: 'Drag and Drop Project',
                    online: false,
                    port: 3000
                }
            }
        }
    });

    // Load npm tasks.
    grunt.loadNpmTasks('grunt-browser-sync');

    // Define default task.
    grunt.registerTask('default', ['browserSync']);
};
