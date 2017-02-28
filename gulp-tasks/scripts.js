/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const concat = require('gulp-concat')
  const config = require('../gulp-config')
  const eslint = require('gulp-eslint')

  /**
   * Build project scripts.
   */
  gulp.task('scripts-project', () => {
    let projectScripts = [
      config.paths.js + '/main.js'
    ]
    return gulp.src(projectScripts)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(concat('main.js'))
      .pipe(gulp.dest(config.paths.dist_js))
  })

  gulp.task('scripts-vendor', () => {
    let vendorScripts = []
    return gulp.src(vendorScripts)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(config.paths.dist_js))
  })

  gulp.task('scripts', ['scripts-project', 'scripts-vendor'])
})()
