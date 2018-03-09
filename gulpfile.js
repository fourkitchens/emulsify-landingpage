/* globals require, process, __dirname */

(function () {
  'use strict'

  const gulp = require('gulp')
  const browserSync = require('browser-sync').create()
  const clean = require('gulp-clean')
  const config = require('./gulp-config')
  const gulpSequence = require('gulp-sequence')
  require('require-dir')('./gulp-tasks')

  var ghPages = require('gh-pages')

  gulp.task('deploy', ['build'], () => {
    // Publish the build directory to github pages.
    ghPages.publish(config.paths.dist, (err) => {
      if (err === undefined) {
        console.log('Successfully deployed!')
      } else {
        console.log(err)
      }
    })
  })

  /**
   * Remove the `dist` folder.
   */
  gulp.task('clean', function () {
    return gulp.src(config.paths.dist, {read: false})
      .pipe(clean())
  })

  /**
   * Build task.
   */
  gulp.task('build', gulpSequence(['clean'], ['imagemin', 'styles', 'scripts', 'html', 'move-fonts', 'move-morgue', 'cname'], ['lint']))

  /**
   * Move CNAME file to /dist
   */
  gulp.task('cname', () => {
    gulp.src('CNAME', { base: './' })
      .pipe(gulp.dest(config.paths.dist))
  })

  /**
   * Task for running browserSync.
   */
  gulp.task('serve', ['build'], () => {
    browserSync.init({
      server: config.server,
      reloadDelay: 600
    })
    gulp.watch([config.paths.twig + '/**.twig', config.paths.twig + '/**/*.tpl'], ['html']).on('change', browserSync.reload)
    gulp.watch(config.paths.js + '/**/*.js', ['scripts']).on('change', browserSync.reload)
    gulp.watch(config.paths.sass + '/**/*.scss', ['styles']).on('change', browserSync.reload)
    gulp.watch(config.paths.img + '/**/*', ['imagemin']).on('change', browserSync.reload)
  })
})()
