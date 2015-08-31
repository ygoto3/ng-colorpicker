var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('../../config');

gulp.task('samples:webpack', function () {
  gulp.src(config.samples.webpack.entry)
      .pipe(webpack(config.samples.webpack))
      .pipe(gulp.dest(config.samples.js.dest));
});
