// See notes in README file

const gulp = require('gulp');

// const { watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload,
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      imagemin = require('gulp-imagemin'),
      changed = require('gulp-changed'),
      uglify = require('gulp-uglify'),
      lineec = require('gulp-line-ending-corrector');



// Compile sass
function styles(){
  return gulp.src('src/assets/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('docs/assets/css'))
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'docs'
    }
  });

  gulp.watch('docs/assets/css/*.css', styles);
  // gulp.watch('docs/*.html').on('change', browserSync.reload);
  // gulp.watch('src/assets/js/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;

 
// First Attempt ===================================


/*
-- Top Level Functions --
gulp.task   - Defines tasks
gulp.src    - Points to files to use
gulp.dest   - Points to output folder
gulp.watch  - Watch files and folders for changes
*/


// // Copy all HTML files
// function html(done){
//   gulp.src('src/*.html')
//   .pipe(gulp.dest('docs'));
//   done();
// };

// // Minimise Images
// function images(done){
//   gulp.src('src/assets/images/*')
//   .pipe(imagemin())
//   .pipe(gulp.dest('docs/assets/images'));
//   done();
// };


// // Compile sass
// function css(done){
//   gulp.src('src/assets/scss/*.scss')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(gulp.dest('docs/assets/css'));
//   done();
// };

// // Concat and Minify js
// function js(done){
//   gulp.src('src/assets/js/*.js')
//   .pipe(concat('main.js'))
//   .pipe(uglify()) // minifies the js
//   .pipe(gulp.dest('docs/assets/js'));
//   done();
// };

// // Watch Files
// function watch_files(){
//   gulp.watch('image', images);
//   gulp.watch('css', css);
//   gulp.watch('js', js);
//   gulp.watch('html', html);
// }


// // Tasks
// gulp.task('images', images);
// gulp.task('css', css);
// gulp.task('js', js);
// gulp.task('html', html);



// // Run all tasks gulp v4
// gulp.task('default', gulp.parallel('css', 'js', 'images', 'html'), gulp.series(function(done) {
// done();
// }));

// gulp.task('watch', watch_files);

