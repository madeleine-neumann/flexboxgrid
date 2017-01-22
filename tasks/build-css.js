const gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    notify      = require("gulp-notify"),
    sourcemaps  = require('gulp-sourcemaps');

module.exports = function(gulp, config) {
gulp.task('build-css', function () {
    if (config.activateCssBuild === true) {
        return gulp.src(config.scssSrcPath)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.cssDistPath))
            // You can comment this part out if you don't would like to have notifications on your desktop
            .pipe(notify('CSS build complete'));
        }
    })
}