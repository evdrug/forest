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
    responsive = require('gulp-responsive');
const browserSync = require('browser-sync').create();



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
        dest: 'dst'
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

function styles() {
    return gulp.src('./src/styles/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest));
}


function server() {
    browserSync.init({
        server: paths.root,
        open: false
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}


function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    // gulp.watch(paths.images.src, images);
}

exports.templates = templates;
exports.images = images;
exports.imagesPng = imagesPng;
exports.styles = styles;
exports.scripts = scripts;
exports.server = server;
exports.watch = watch;


gulp.task('default', gulp.series(
    gulp.parallel(styles, scripts, templates),
    gulp.parallel( watch,server)
));
