 // See notes in README file

 const gulp = require('gulp');
 const imagemin = require('gulp-imagemin');
 const uglify = require('gulp-uglify');
 const sass = require('gulp-sass');
 const concat = require('gulp-concat');

 /*
  -- Top Level Functions --
  gulp.task   - Defines tasks
  gulp.src    - Points to files to use
  gulp.dest   - Points to output folder
  gulp.watch  - Watch files and folders for changes
 */


// Copy all HTML files
gulp.task('copyHtml', gulp.series(function(done){
  gulp.src('src/*.html')
  .pipe(gulp.dest('docs'));
  done();
}));

// Minimise Images

gulp.task('imageMin', gulp.series(function(done){
  gulp.src('src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('docs/assets/images'));
  done();
}));


// Minify JS - Removed, now under scripts
// gulp.task('minify', gulp.series(function(done){
//   gulp.src('src/assets/js/*.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('docs/assets/js'));
//   done();
// }));

// Compile sass
gulp.task('sass', gulp.series(function(done){
  gulp.src('src/assets/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('docs/assets/css'));
  done();
}));

// Scripts
gulp.task('scripts', gulp.series(function(done){
  gulp.src('src/assets/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('docs/assets/js'));
  done();
}));


// Run all tasks gulp v4
gulp.task('default', gulp.series(gulp.parallel('copyHtml', 'imageMin', 'sass', 'scripts'), gulp.series(function(done) {
done();
})));
