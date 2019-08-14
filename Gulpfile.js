var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var filesExist = require('files-exist');
var jshint = require('gulp-jshint');

var js_folder = './js/';
var css_folder = './css/';
var dist_folder = './dist/';

var js_top_file = js_folder + 'module-wrapper-top.js';
var js_bottom_file = js_folder + 'module-wrapper-bottom.js';

var js_files = [
    js_folder + 'socialcalcconstants.js',
    js_folder + 'socialcalc-3.js',
    js_folder + 'socialcalctableeditor.js',
    js_folder + 'formatnumber2.js',
    js_folder + 'formula1.js',
    js_folder + 'socialcalcpopup.js',
    js_folder + 'socialcalcspreadsheetcontrol.js',
    js_folder + 'socialcalcviewer.js'
];

var css_files = [
    css_folder + 'socialcalc.css'
];

gulp.task('validate-js', function () {
    for (js_file of filesExist(js_files)) {
        gulp.src(js_file)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    }

    // We need the wrapper to be complete in order to process it.
    var module_wrapper_files = filesExist([js_top_file, js_bottom_file]);
    gulp.src(module_wrapper_files)
        .pipe(concat('module-wrapper.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', function () {
    var files = filesExist([].concat(js_top_file, js_files, js_bottom_file));
    return gulp.src(files)
        .pipe(concat('SocialCalc.js'))
        .pipe(gulp.dest(dist_folder));
});

gulp.task('css', function () {
    var files = filesExist(css_files);
    return gulp.src(files)
        .pipe(concat('socialcalc.css'))
        .pipe(gulp.dest(dist_folder));
});

gulp.task('default', gulp.series(gulp.parallel('js', 'css')), function () {});
