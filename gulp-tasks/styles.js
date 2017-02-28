/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const browserSync = require('browser-sync').create()
  const cleanCSS = require('gulp-clean-css')
  const config = require('../gulp-config')
  const eyeglass = require('eyeglass')
  const prefix = require('gulp-autoprefixer')
  const sass = require('gulp-sass')
  const sassGlob = require('gulp-sass-glob')
  const sassLint = require('gulp-sass-lint')
  const sourcemaps = require('gulp-sourcemaps')

  /**
   * Generate CSS
   */
  gulp.task('styles', () => {
    return gulp.src([config.paths.sass + '/**/*.scss'])
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())
      .pipe(sass(eyeglass(config.sassOptions)).on('error', sass.logError))
      .pipe(prefix(['last 1 version', '> 1%', 'ie 10']))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.dist_css))
      .pipe(browserSync.stream())
  })
})()
