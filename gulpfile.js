var gulp = require('gulp'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    pixrem = require('gulp-pixrem'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegoptim = require('imagemin-jpegoptim'),
    pug = require('gulp-pug'),
    responsive = require('gulp-responsive'),
    svgSprite = require("gulp-svg-sprites"),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    webpack = require('webpack');
    gulpWebpack = require('gulp-webpack');
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
    },
    fonts: {
        src: 'src/fonts/**/*.woff',
        dst: 'dst/fonts/'
    }
};

function templates() {
    return gulp.src('./src/templates/pages/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

function favicon() {
    return gulp.src('./src/images/*.ico')
        .pipe(gulp.dest(paths.root));
}


function respons() {
    return gulp.src('./src/images/**/*.{png,jpg}')

        .pipe(responsive({

            '*':{},
            'water/*':{},
            'preloader/*':{},

            'bg/*.{png,jpg}': [{
                width: 600
            },{
                width: 600 * 2,
                rename: {suffix: '@2x'}
            },{
                width: 600 * 3,
                rename: {suffix: '@3x'}
            }],
            'content/*.{png,jpg}': [{
                width: 600
            },{
                width: 600 * 2,
                rename: {suffix: '@2x'}
            },{
                width: 600 * 3,
                rename: {suffix: '@3x'}
            }]
        },{
            quality: 50,
            compressionLevel: 6,
            progressive: true,
            withMetadata: false,
            errorOnEnlargement: false
            }
            ))
                .pipe(gulp.dest('./dst/images/'));
}

function images() {
    return gulp.src('./src/images/**/*.{jpg,png}')

        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 3,
            use: [pngquant(), jpegoptim({max: 80})],
            interlaced: true
        }))
        .pipe(gulp.dest(paths.images.dest));
}


function styles() {
    return gulp.src('./src/styles/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

function styles2() {
    return gulp.src('./dst/css/*.css')
        .pipe(pixrem({
            replace: true
        }))
        .pipe(gulp.dest(paths.styles.dest+'/d'))
}

function scripts() {
    return gulp.src('./src/scripts/index.js')
        .pipe(gulpWebpack({
            output: {
                filename: 'bundle.js'
            }

        }, webpack))

        .pipe(gulp.dest(paths.scripts.dest));
}

function scripts2() {
    return gulp.src('./src/scripts/water.js')
        .pipe(gulp.dest(paths.scripts.dest));
}

function scriptsMin() {
    return gulp.src('./src/scripts/index.js')
        .pipe(gulpWebpack(require('./webpack.config.js'), webpack))

        .pipe(gulp.dest(paths.scripts.dest));
}


function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dst))
}

function svgSpriteBuild () {
    return gulp.src('./src/images/**/*.svg')
    //  минифицируем svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // Удаляем атрибуты style, fill и stroke из иконок
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        // Удаляем баг с заменой >
        .pipe(replace('&gt;', '>'))
        // Делаем спрайт
        .pipe(svgSprite({ mode : 'symbols' }))
        .pipe(gulp.dest(paths.images.dest));
}

function server() {
    browserSync.init({
        server: paths.root,
        open: false,
        port: 8080
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}


function clearDst() {
    return del(paths.root);
}

function clear() {
    return del([paths.scripts.dest,paths.styles.dest,'dst/*.html']);
}
//
function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    // gulp.watch(paths.images.src, images);
}

exports.templates = templates;
exports.images = images;
exports.respons = respons;
exports.favicon = favicon;
exports.styles = styles;
exports.styles2 = styles2;
exports.scripts = scripts;
exports.scripts2 = scripts2;
exports.fonts = fonts;
exports.scriptsMin = scriptsMin;
exports.svgSpriteBuild = svgSpriteBuild;
exports.server = server;
exports.watch = watch;
exports.clearDst = clearDst;
exports.clear = clear;


gulp.task('default', gulp.series(
    gulp.series(clear),
    gulp.parallel(styles, scripts, scripts2, templates),
    gulp.parallel( watch,server)
));

gulp.task('build', gulp.series(
    gulp.series(clearDst),
    gulp.parallel(styles, scriptsMin, scripts2, templates, favicon, fonts, respons, svgSpriteBuild)
));