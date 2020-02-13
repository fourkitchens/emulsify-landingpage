(() => {
  const gulp = require('gulp');
  const config = require('../gulp-config');

  /**
   * Move the morgue to `dist`.
   */
  gulp.task('move-morgue', () => {
    gulp.src(`${config.paths.morgue}/**`, { base: './' })
      .pipe(gulp.dest(config.paths.dist_morgue));
  });
})();
