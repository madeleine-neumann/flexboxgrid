const   gulp = require('gulp'),
        jasmine = require('gulp-jasmine'),
        reporters = require('jasmine-reporters');
        notify = require("gulp-notify");

module.exports = function(gulp, config) {
    gulp.task('jasmine', function() {
    if (config.activateJasminTest === true) {
        return gulp.src(config.jasminePath)
            .pipe(jasmine({
			    reporter: new reporters.JUnitXmlReporter({
                    savePath: "testresults",
                    consolidateAll: false
                })
		    }
            ))

            .on('error', notify.onError({
                title: 'Jasmine Test Failed',
                message: 'One or more tests failed, see the files for details in /testresults.'
            }));
        }
    });
}
