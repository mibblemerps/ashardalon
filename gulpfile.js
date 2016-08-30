/*
Credit: https://gist.github.com/madhums/7c483fa277343e6a3712
 */

'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

function compile (watch) {
    var bundler = browserify('./src/main.js', { debug: true }).transform(babel, { presets: ['es2015'] });
    var watcher = watch ? watchify(bundler) : '';

    function rebundle () {
        return bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source("build.js"))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build'));
    }

    if (watch) {
        watcher.on('update', function () {
            console.log('-> bundling...');
            rebundle();
        });
    }

    return rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('build', function () { return compile(); });
gulp.task('watch', function () { return watch(); });

gulp.task('default', ['watch']);