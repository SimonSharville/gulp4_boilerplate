 // See notes in README file

 const gulp = require('gulp');
 const imagemin = require('gulp-imagemin');
 const uglify = require('gulp-uglify');
 const sass = require('gulp-sass');
 const concat = require('gulp-concat');
 // const { watch } = require('gulp');

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

// Concat and Minify js
function js(done){
  gulp.src('src/assets/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify()) // minifies the js
  .pipe(gulp.dest('docs/assets/js'));
  done();
};

// // Watch Files
// function watch_files(){
//   gulp.watch('image', images);
//   gulp.watch('css', css);
//   gulp.watch('js', js);
//   gulp.watch('html', html);
// }


// Tasks
gulp.task('images', images);
gulp.task('css', css);
gulp.task('js', js);
gulp.task('html', html);



// Run all tasks gulp v4
gulp.task('default', gulp.parallel('css', 'js', 'images', 'html'), gulp.series(function(done) {
done();
}));

// gulp.task('watch', watch_files);

