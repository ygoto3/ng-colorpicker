var gulp = require('gulp');
var cssnext = require('gulp-cssnext');
var config = require('../../config');

gulp.task('samples:cssnext', function () {
  gulp.src(config.samples.cssnext.src)
      .pipe(cssnext(config.samples.cssnext))
      .pipe(gulp.dest(config.samples.css.dest));
});
