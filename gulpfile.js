const gulp = require('gulp');
const sequence = require('gulp-sequence');
const critical = require('critical');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('criticalCSS', (cb) => {
    critical.generateInline({
        base: 'dist/',
        src: 'index.html',
        htmlTarget: 'index.html',
        width: 960,
        height: 600,
        minify: true
    }, cb.bind(cb));
});

gulp.task('minify-css', () => {
    return gulp.src('dist/assets/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/assets/css'));
  });

gulp.task('htmlmin', () => {
    return gulp.src('dist/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minfyJS: true
      }))
      .pipe(gulp.dest('dist'));
  });

gulp.task('css', sequence('minify-css', 'criticalCSS'));
gulp.task('html', sequence('htmlmin'));
gulp.task('default', sequence('css', 'html'));
