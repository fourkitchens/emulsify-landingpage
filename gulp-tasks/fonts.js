(() => {
  const gulp = require('gulp');
  const config = require('../gulp-config');
  const flatten = require('gulp-flatten');

  const fonts = [
    'fonts/**/*',
  ];

  /**
   * Move fonts into dist/.
   */
  gulp.task('move-fonts', () => {
    gulp.src(fonts, { base: './' })
      .pipe(flatten())
      .pipe(gulp.dest(config.paths.dist_fonts));
  });
})();
