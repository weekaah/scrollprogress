var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


// minify scripts
// ------------------------------------
gulp.task('js-minify', function() {
  gulp.src('js/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('js'));
});
