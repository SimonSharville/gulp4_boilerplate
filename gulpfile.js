// See notes in README file

const gulp = require('gulp');

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

// Compile scss to css
function compileCSS(){
  return gulp.src('app/assets/scss/**/*.scss')
  .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
  .pipe(sourcemaps.write('./'))
  .pipe(lineec())
  .pipe(gulp.dest('app/assets/css'))
}

function concatCSS() {
  return gulp.src('app/assets/css/*css')
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
  .pipe(concat('sard-styles.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'})) // Minimises the css
  .pipe(sourcemaps.write('./'))
  .pipe(lineec())
  .pipe(gulp.dest('docs/assets/css'))
  .pipe(browserSync.stream());
}

// Include Partials and convert to HTML
function hamlHTML (done) {
  gulp.src([
    'app/views/**/*.haml',
    '!app/views/partials/**/*',      //exclude files within partials
    ])
    .pipe(include().on('error', function(d) { console.log(d.message); })) // Includes partials
    .pipe(haml().on('error', function(e) { console.log(e.message); }))
    .pipe(gulp.dest('docs'))
    done();
};


// Concat and Minify js
function js(done){
  gulp.src('app/assets/js/*.js')
  .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify()) // minifies the js
  .pipe(sourcemaps.write('./'))
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

  
  gulp.watch('app/views/**/*.haml', hamlHTML).on('change', browserSync.reload);
  gulp.watch('app/assets/scss/**/*.scss', compileCSS);
  gulp.watch('app/assets/css/*css', concatCSS).on('change', browserSync.reload);
  gulp.watch('app/assets/js/**/*.js', js).on('change', browserSync.reload);
}


exports.hamlHTML = hamlHTML;
exports.compileCSS = compileCSS;
exports.concatCSS = concatCSS;
exports.js = js;
exports.watch = watch;

// Sets the default to gulp watch
var finish = gulp.parallel(watch);
gulp.task('default', finish);




// First Attempt ================================



// // Copy all HTML files
// function html(done){
//   gulp.src('app/*.html')
//   .pipe(gulp.dest('docs'));
//   done();
// };

// // Minimise Images
// function images(done){
//   gulp.src('app/assets/images/*')
//   .pipe(imagemin())
//   .pipe(gulp.dest('docs/assets/images'));
//   done();
// };


// // Compile sass
// function css(done){
//   gulp.src('app/assets/scss/*.scss')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(gulp.dest('docs/assets/css'));
//   done();
// };

// // Concat and Minify js
// function js(done){
//   gulp.src('app/assets/js/*.js')
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

