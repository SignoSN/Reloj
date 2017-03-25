var gulp = require('gulp');
var less =  require('gulp-less');
var minify = require('gulp-csso');
var coffee = require('gulp-coffee');

gulp.task("scripts", function(){
    return gulp.src('scripts/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('js'));
});

gulp.task("less", function(){
    return gulp.src("less/*.less")
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function(){
    gulp.watch("less/*.less", ["less"]);
    gulp.watch("scripts/*.coffee", ["scripts"]);
});

gulp.task("default", ["watch"]);
