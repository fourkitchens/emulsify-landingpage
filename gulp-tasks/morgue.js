/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const config = require('../gulp-config')

  /**
   * Move the morgue to `dist`.
   */
  gulp.task('move-morgue', function () {
    gulp.src(config.paths.morgue + '/**', { base: './' })
      .pipe(gulp.dest(config.paths.dist_morgue))
  })
})()
