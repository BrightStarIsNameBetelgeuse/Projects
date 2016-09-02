/**
 * Created by Andromeda on 21.02.2016.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch')

gulp.task('less', function(){
    gulp.src(['less/*.less'])
        .pipe(less())
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['less'],function(){
    gulp.watch('less/*.less',['less']);
});