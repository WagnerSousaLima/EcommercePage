const gulp = require('gulp');
const watchSass = require('gulp-watch-sass');
const debug = require('gulp-debug');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('sass');

let sassOptions = {
  "includePaths": ["sass"],
  "outputStyle": "compressed"
};

sassOptions.fiber = require('fibers');

/* SASS Watch */
const sasswatch = () => {
  watchSass(["sass/**/**/*.scss"], {
    "includePaths": ["sass"],
    "outputStyle": "compressed"
  })
    .pipe(
      sass(sassOptions).on('error', error => {
        console.log(error.messageFormatted);
      }),
    )
    .pipe(
      gulp.dest("css/")
    )
    .pipe(debug({ title: 'CSS Compilado:' }));
};
sasswatch.description = 'SASS Watch';
/* SASS Watch */

/* Watch */
const watch = sasswatch;
watch.description = 'Watch';
/* Watch */

export { sasswatch, watch };

gulp.task('watch', function () {
  gulp.watch('/sass/**/*.scss');
});
