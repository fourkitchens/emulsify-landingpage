/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const config = require('../gulp-config')
  const twig = require('gulp-twig')
  const w3cjs = require('gulp-w3cjs')
  const typekitID = 'jcq6znj'

  gulp.task('html', ['test-html'])

  gulp.task('build-html', () => {
    let htmlSource = [
      config.paths.twig + '/*.twig'
    ]
    return gulp.src(htmlSource)
      .pipe(twig({
        data: {
          typekit: typekitID
        }
      }))
      .pipe(gulp.dest(config.paths.dist_html))
  })

  gulp.task('test-html', ['build-html'], () => {
    return gulp.src(config.paths.dist_html)
      .pipe(w3cjs())
      .pipe(w3cjs.reporter())
  })
})()
