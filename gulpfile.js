 const gulp = require('gulp');
 const imagemin = require('gulp-imagemin');
 const uglify = require('gulp-uglify');

 /*
  -- Top Level Functions --
  gulp.task   - Defines tasks
  gulp.src    - Points to files to use
  gulp.dest   - Points to output folder
  gulp.watch  - Watch files and folders for changes
 */


 // Copy all HTML files
 gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('docs'));
 });

 // Minimise Images
 gulp.task('imageMin', () =>
  gulp.src('src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('docs/assets/images'))
);

 // Minify JS
 gulp.task('minify', function(){
  gulp.src('src/assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('docs/assets/js'));
 });