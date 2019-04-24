# bootstrap_4_boilerplate

Created 2019-04-01

cd Gits/bootstrap_4_boilerplate


Based on: 
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
    npm install --save-dev gulp-rename                 (Renames files)
    npm install --save-dev gulp-ruby-haml              (Compiles haml to html)
    npm install --save-dev gulp-inject-partials        (Injects partials)
    npm install --save-dev gulp-include-html           DIDN'T WORK
    npm install --save-dev gulp-html-partial           DIDN'T WORK
    npm install --save-dev gulp-file-include           DIDN'T WORK
    npm install --save-dev gulp-include                (Include Partials into HAML files)
    npm install --save-dev gulp-sourcemaps             (Allows to find original file in development)


8. Install Ruby
    https://number42.de/blog/2018/05/22/rbenv-2018-05-22-rbenv.html
    https://github.com/rbenv/rbenv
    rbenv install 2.6.2     (installs ruby version globaly)
    rbenv local 2.6.2       (Installs locally)
    rbenv version           (Checks version) 
    rbenv versions          (Checks all versions installed and highlights active) 
    gem install bundler     Bundler version 2.0.1

    Changed to 2.3.8 by typing: rbenv local 2.3.8

      The `haml' command exists in these Ruby versions:
        1.9.3-p551
        2.2.10
        2.3.8
      The `nokogiri' command exists in these Ruby versions:
        1.9.3-p551
        2.2.10
        2.2.2
        2.3.8