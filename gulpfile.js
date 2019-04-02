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
function copy_html(done){
  gulp.src('src/*.html')
  .pipe(gulp.dest('docs'));
  done();
};

// Minimise Images
function image_min(done){
  gulp.src('src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('docs/assets/images'));
  done();
};


// Compile sass
function scss_css(done){
  gulp.src('src/assets/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('docs/assets/css'));
  done();
};

// Scripts
function concate_scripts(done){
  gulp.src('src/assets/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify()) // minifies the js
  .pipe(gulp.dest('docs/assets/js'));
  done();
};


// Tasks
gulp.task('copy_html', copy_html);
gulp.task('image_min', image_min);
gulp.task('scss_css', scss_css);
gulp.task('concate_scripts', concate_scripts);


// Run all tasks gulp v4
gulp.task('default', gulp.parallel('copy_html', 'image_min', 'scss_css', 'concate_scripts'), gulp.series(function(done) {
done();
}));

// gulp.task('watch', function e(e){
//   return gulp.watch('src/assets/js/*.js', gulp.series('scripts'));
//   return gulp.watch('src/assets/images/*', gulp.series('imageMin'));
//   return gulp.watch('src/assets/scss/*.scss', gulp.series('sass'));
//   return gulp.watch('src/*.html', gulp.series('copyHtml'));
//   e();
// });
