(() => {
  /* eslint-disable global-require */
  const gulp = require('gulp');
  const config = require('../gulp-config');
  const eslint = require('gulp-eslint');
  const w3cjs = require('gulp-w3cjs');
  /* eslint-enable global-require */

  /**
   * Lint javascript.
   */
  gulp.task('eslint', () => {
    const excludePatterns = ['!node_modules/**', `!${config.paths.dist_morgue}`];
    const sourcePatterns = ['gulpfile.js', 'gulp-tasks/**/*.js', `${config.paths.js}/**/*.js`];
    let patterns = [];
    patterns = sourcePatterns.concat(excludePatterns);

    return gulp.src(patterns)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });

  /**
   * Test HTML for W3C compliance.
   */
  gulp.task('w3c', () => {
    gulp.src(`${config.paths.dist_html}*.html`)
      .pipe(w3cjs())
      .pipe(w3cjs.reporter());
  });

  gulp.task('lint', ['eslint', 'w3c']);
})();
