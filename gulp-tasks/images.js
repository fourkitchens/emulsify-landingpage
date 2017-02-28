/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const config = require('../gulp-config')
  const imagemin = require('gulp-imagemin')

  /**
   * Task for minimizing images.
   */
  gulp.task('imagemin', () => {
    return gulp.src(config.paths.img + '/**/*')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
        ]
      }))
      .pipe(gulp.dest(config.paths.dist_img))
  })
})()
