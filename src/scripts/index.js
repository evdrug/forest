var pageActive = window.location.pathname;
require('./main');
require('./preloader');

if(-1 !== pageActive.indexOf('about')){
    require('./scrollAbout');
} else if(-1 !== pageActive.indexOf('works')){
    require('./slider');
    require('./revieValidate');
} else if(-1 !== pageActive.indexOf('blog')){
    require('./blog-menu');
}




