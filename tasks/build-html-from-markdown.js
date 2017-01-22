const gulp        = require('gulp'),
    markdown    = require('gulp-markdown'),
    notify      = require("gulp-notify");

module.exports = function(gulp, config) {
    gulp.task('markdown-to-html', function() {
        if (config.activateMdBuild === true) {
            return gulp.src('config.mdSrcPath')
                .pipe(markdown())
                .pipe(gulp.dest(config.mdDistPath))
                // You can comment this part out if you don't would like to have notifications on your desktop
                .pipe(notify('Markdown converted to html'));
        }
    });
}
