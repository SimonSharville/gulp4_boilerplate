# gulp_4_boilerplate

https://simonsharville.github.io/gulp4_boilerplate/

Created 2019-04-01


TO USE
  In Terminal go to:
  cd Gits/gulp4_boilerplate

  and type:
  gulp


HOW TO USE ==========================================================
Always work within the 'app' folder, this will render into the 'docs' folder. 
The 'docs' folder will be the live stuff.


TO DUPLICATE PROJECT ================================================
    To Duplicate poject, Copy project, rename it and in terminal type:
      npm install



BUILD NOTES =========================================================
This was created using Gulp 4. 
There is NO Bootstrap, fontawesome, sard-icons or Reboto fonts installed, They are all imported through the 'remote styles'. Local styles can be added on top of that. See Index Page for instructions.

The core JS for Bootstrap and global JS for SARD are also linked to remotely. If you need local scripts, thay can be added, again see Index Page for instructions.

Gulp compiles:
- All SCSS files into 'sard-styles.min.css' in the 'docs/assets/css' folder. This includes the remote styles.

- All JS files into 'local-scripts' in the 'docs/assets/js' folder. (See Index Page for instructions for adding more).

-All .haml files into .html files in the 'docs' folder.

The 'docs' folder is the public folder (GitHub Pages) on github.



HISTORY =============================================================

Based on the following tutorials: 
  https://www.youtube.com/watch?v=1rw9MfIleEg
  and
  https://www.youtube.com/watch?v=hnCmSXCZEpU

  Gulp 4
  https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/
  https://www.liquidlight.co.uk/blog/how-do-i-update-to-gulp-4/
  https://www.youtube.com/watch?v=2HpNiyimo8E
  https://www.youtube.com/watch?v=tTrPLQ6nOX8
  https://www.youtube.com/watch?v=QgMQeLymAdU
  https://www.youtube.com/watch?v=4y8Iw85__Xk
  https://www.youtube.com/watch?v=yowgoHo_IZk
  https://www.youtube.com/watch?time_continue=696&v=hnCmSXCZEpU


Install Process
1.  Install node
    
2.  Install Gulp globally
    sudo npm install gulp -g
    gulp -v   (check version)

3.  Initiallise node in local folder
    In Root folder of project
    npm init -y

4.  Install Gulp locally as a development dependency
    npm install --dev-save gulp

5.  Create folder structure

6.  Create gulpfile.js

7.  Add Gulp packages
    npm install --save-dev gulp-imagemin                (Minimises images)
    npm install --save-dev gulp-uglify                  (Minifies js files)
    npm install --save-dev gulp-sass                    (Compiles scss to css)
    npm install --save-dev gulp-concat                  (Cconcats js files into one)
    npm install --save-dev browser-sync                 (syncs the browser on changes)
    npm install --save-dev gulp-autoprefixer            (prefixes css for various browsers)
    npm install --save-dev gulp-changed                 (looks for changed images)
    npm install --save-dev gulp-clean-css
    npm install --save-dev gulp-line-ending-corrector   (Correct line ending for differnet systems)
    npm install --save-dev gulp-sourcemaps              (identifies location of original source files in browser development)
    npm install --save-dev gulp-rename                  (Renames files)
    npm install --save-dev gulp-ruby-haml               (Compiles haml to html)
    npm install --save-dev gulp-inject-partials         (Injects partials)
    npm install --save-dev gulp-include                 (Include Partials into HAML files)
    npm install --save-dev del                          (Delete files and folder)

    // Bootstrap
    https://www.youtube.com/watch?v=6Ovw43Dkp44
    npm install --save-dev bootstrap 
    npm install --save-dev jquery
    npm install --save-dev popper.js                    

    NOTES
    npm rm gulp-NAME                                    (To remove a package)
    
    UPDATING PACKAGES
    https://bytearcher.com/articles/using-npm-update-and-npm-outdated-to-update-dependencies/
    npm update                                          (Updates any out of date packages)
    npm outdated                                        (Checks for outdated packages)




