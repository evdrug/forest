var pageActive = window.location.pathname;
require('./main');
require('./preloader');
require('./revieValidate');

if(-1 !== pageActive.indexOf('about')){
    require('./scrollAbout');
} else if(-1 !== pageActive.indexOf('works')){
    require('./slider');
} else if(-1 !== pageActive.indexOf('blog')){
    require('./blog-menu');
} else if(-1 !== pageActive.indexOf('admin')){
    require('./admin');
}




