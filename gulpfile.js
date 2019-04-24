// See notes in README file

const gulp = require('gulp');

// const { watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      imagemin = require('gulp-imagemin'),
      changed = require('gulp-changed'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      lineec = require('gulp-line-ending-corrector');
      haml = require('gulp-ruby-haml');
      include = require('gulp-include');


/*
-- Top Level Functions --
gulp.task   - Defines tasks
gulp.src    - Points to files to use
gulp.dest   - Points to output folder
gulp.watch  - Watch files and folders for changes
*/


// Functions ====================================

// Compile sass
function styles(){
  return gulp.src('src/assets/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS({compatibility: 'ie8'})) // Minimises the css
  .pipe(rename({extname : '.min.css' }))  // Add extension to the renamed CSS file
  .pipe(gulp.dest('docs/assets/css'))
  .pipe(browserSync.stream());
}

// Include Partials
function includeHTML (done) {
  gulp.src('src/views/**/*.haml')
    .pipe(include()).on('error', console.log)
    .pipe(gulp.dest('src/dist'))
    done();
};

// Haml to Html
function hamlHTML(done){
  gulp.src('src/dist/*.haml')
  .pipe(haml().on('error', function(e) { console.log(e.message); }))
  .pipe(gulp.dest('docs'));
  done();
};

// Create HTML Files
// function html(done){
//   gulp.src('src/dist/*.html')
//   .pipe(gulp.dest('docs'));
//   done();
// };

// Concat and Minify js
function js(done){
  gulp.src('src/assets/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify()) // minifies the js
  .pipe(gulp.dest('docs/assets/js'));
  done();
};







// /////////////////////////////
// These watch the source folder

function watch(done) {
  browserSync.init({
    server: {
      baseDir: 'docs'
    }
  })
  done();

  gulp.watch('src/assets/scss/**/*.scss', styles);
  gulp.watch('src/views/**/*.haml', includeHTML).on('change', browserSync.stream);
  gulp.watch('src/dist/*.haml', hamlHTML).on('change', browserSync.reload);
  // gulp.watch('src/dist/*.html', html).on('change', browserSync.reload);
  gulp.watch('src/assets/js/**/*.js', js).on('change', browserSync.reload);
}

// exports.styles = styles;
// exports.minimiseCSS = minimiseCSS;
// exports.html = html;
// exports.hamlHTML = hamlHTML;
exports.includeHTML = includeHTML;
exports.watch = watch;

 




// First Attempt ================================



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

