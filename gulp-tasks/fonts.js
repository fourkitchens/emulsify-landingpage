/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const config = require('../gulp-config')
  const flatten = require('gulp-flatten')

  var fonts = [
    './node_modules/font-awesome/fonts/**/*'
  ]

  /**
   * Move fonts into dist/.
   */
  gulp.task('move-fonts', () => {
    gulp.src(fonts, { base: './' })
      .pipe(flatten())
      .pipe(gulp.dest(config.paths.dist_fonts))
  })
})()
