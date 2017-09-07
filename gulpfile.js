var gulp = require('gulp'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pug = require('gulp-pug'),
    tinypng = require('gulp-tinypng'),
    responsive = require('gulp-responsive'),
    browserSync = require('browser-sync').create();


const paths = {
    root: './dst',
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dst/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dst/js/'
    },
    templates: {
        src: 'src/templates/**/*.pug',
        dest: root
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'dst/images/'
    }
};

function templates() {
    return gulp.src('./src/templates/pages/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

function images() {
    return gulp.src('./src/images/**/*.{jpg,png}')
        // .pipe(responsive({
        //     '*.{jpg,png}': [{
        //         width: 400
        //     },{
        //         width: 800,
        //         rename: {suffix: '@2x'}
        //     }],
        // }))

        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 3})
        ]))
        .pipe(gulp.dest(paths.images.dest));
}

function imagesPng() {
    return gulp.src('./src/images/**/*.{png,jpg}')
        .pipe(tinypng('SzLdhIWTmV3paeSEXj-9dCKzN4ORnSMB'))
        .pipe(gulp.dest(paths.images.dest));
}

exports.templates = templates;
exports.images = images;
exports.imagesPng = imagesPng;