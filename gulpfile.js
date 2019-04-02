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
function html(done){
  gulp.src('src/*.html')
  .pipe(gulp.dest('docs'));
  done();
};

// Minimise Images
function images(done){
  gulp.src('src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('docs/assets/images'));
  done();
};


// Compile sass
function css(done){
  gulp.src('src/assets/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('docs/assets/css'));
  done();
};

// Concat and Minify Scripts
function scripts(done){
  gulp.src('src/assets/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify()) // minifies the js
  .pipe(gulp.dest('docs/assets/js'));
  done();
};

// Watch Files
function watch(){
  gulp.watch('html', html);
  gulp.watch('image', images);
  gulp.watch('css', css);
  gulp.watch('scripts', scripts);
}


// Tasks
gulp.task('html', html);
gulp.task('images', images);
gulp.task('css', css);
gulp.task('scripts', scripts);
gulp.task('watch', watch);


// Run all tasks gulp v4
gulp.task('default', gulp.parallel('html', 'images', 'css', 'scripts'), gulp.series(function(done) {
done();
}));

// gulp.task('watch', function e(e){
//   return gulp.watch('src/assets/js/*.js', gulp.series('scripts'));
//   return gulp.watch('src/assets/images/*', gulp.series('imageMin'));
//   return gulp.watch('src/assets/scss/*.scss', gulp.series('sass'));
//   return gulp.watch('src/*.html', gulp.series('copyHtml'));
//   e();
// });
