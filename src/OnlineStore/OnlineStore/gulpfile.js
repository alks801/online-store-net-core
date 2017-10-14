/// <binding BeforeBuild='less' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    less = require("gulp-less");

var paths = {
    webroot: "./wwwroot/"
};

gulp.task("less", function () {
    console.log(paths.webroot + 'css/styles.css');
    return gulp.src(paths.webroot +'less/styles.less')
        .pipe(less())
        .pipe(gulp.dest(paths.webroot + 'css'))
});