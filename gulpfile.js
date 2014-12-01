"use strict";

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith  = require('gulp.spritesmith'),
    rename = require("gulp-rename");


gulp.task('css', function () {
   gulp.src('sass/screen.scss')
        .pipe(sass({'sourcemap=none': true}))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(minifyCSS())
        .pipe(rename('screen.min.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('images/sprite/*.*') 
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                cssFormat: 'sсss',
                algorithm: 'binary-tree',
                padding: 5,
                cssTemplate: 'sass/scss.template.mustache',
				cssVarMap: function(sprite) {
					sprite.name = 's-' + sprite.name
				}
            }));

    spriteData.img.pipe(gulp.dest('public/images/')); 
    spriteData.css.pipe(gulp.dest('sass/'));
});

gulp.task('copyNormalize', function() {
    gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['css'])
});


gulp.task('default', function() {
    gulp.run('copyNormalize');
    gulp.run('sprite');
    gulp.run('css');
    gulp.run('watch');
});    


