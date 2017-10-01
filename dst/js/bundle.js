/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var pageActive = window.location.pathname;
__webpack_require__(1);
__webpack_require__(2);

if(-1 !== pageActive.indexOf('about')){
    __webpack_require__(3);
} else if(-1 !== pageActive.indexOf('works')){
    __webpack_require__(4);
    // require('./revieValidate');
} else if(-1 !== pageActive.indexOf('blog')){
    __webpack_require__(5);
}






/***/ }),
/* 1 */
/***/ (function(module, exports) {

var btnAvt = document.getElementsByClassName('js-btn-avt'),
    blockAvt = document.getElementsByClassName('js-welcome__form-wrapper'),
    btnIndex = document.getElementsByClassName('js-index'),
    menHumb = document.getElementsByClassName('js-menu-hamb'),
    iconHumb = document.getElementsByClassName('js-hamburger'),
    preloader = document.getElementById('preloader-page'),
    bg = document.getElementsByClassName('js-flipp'),
    btnArrow = document.getElementsByClassName('btn-arrow'),
    arrowUp = document.getElementsByClassName('arrow_up'),
    titleH1 = document.getElementsByClassName('block-triangle');


window.onload = ()=> {
    preloader.setAttribute('style', 'display: none;');


    var btnHumb = document.getElementsByClassName('hamburger__link');

    btnAvt = btnAvt[0];
    blockAvt = blockAvt[0];
    btnIndex = btnIndex[0];
    btnHumb =   btnHumb[0];
    menHumb = menHumb[0];
    iconHumb = iconHumb[0];
    bg = bg[0];
    btnArrow = btnArrow[0];
    arrowUp = arrowUp[0];
    titleH1 = titleH1[0];



    if(bg){
        bg.onclick = function (e) {
            blockAvt.classList.remove('flipped')
            btnAvt.classList.remove('none');
        }
    }
    if(btnAvt){
        btnAvt.onclick = function (e) {
            e.preventDefault();
            blockAvt.classList.add('flipped')
            btnAvt.classList.add('none');
        }
    }

    if(btnIndex){
        btnIndex.onclick = function (e) {
            e.preventDefault();
            blockAvt.classList.remove('flipped')
            btnAvt.classList.remove('none');
        }
    }



    if(btnHumb) {
        btnHumb.onclick = function (e) {
            e.preventDefault();

            menuHambItems = document.getElementsByClassName('menu-hamb__item');
            iconHumbAct = document.getElementsByClassName('hamburger_active');
            if(iconHumbAct[0]) {
                menHumb.classList.remove('menu-hamb_active')
                iconHumb.classList.remove('hamburger_active');
                document.body.style.overflow = 'auto';
            }else{
                menHumb.classList.add('menu-hamb_active')
                iconHumb.classList.add('hamburger_active');
                document.body.style.overflow = 'hidden';
                if(menuHambItems){
                    for (var i = 0; i < menuHambItems.length; ++i) {
                        menuHambItems[i].setAttribute('style', `animation-delay: 0.${5+i}s;`);
                    }
                }
            }

        }
    }


    if(btnArrow){
        btnArrow.onclick = function (e) {
            e.preventDefault();
            var pos = titleH1.getBoundingClientRect();
            windPos = window.pageYOffset;
            var coord = windPos+pos.top + pos.height-20;
            var top = windPos;
            var scr = setInterval(function () {
                top += 5;
                window.scrollTo(0, top);
                if (top > coord) {
                    clearInterval(scr);
                }
            }, 5);
        }
    }
    if(arrowUp){
        arrowUp.onclick = function (e) {
            e.preventDefault();
            var pos = titleH1.getBoundingClientRect();
            windPos = window.pageYOffset;
            var coord = windPos + pos.top+pos.height-15;
            var scr = setInterval(function () {
                windPos -= 5;
                window.scrollTo(0, windPos);
                if (windPos < coord) {
                    clearInterval(scr);
                }
            }, 2);
        }
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var textProc = document.getElementsByClassName('js-text-svg-prel');
textProc = textProc[0];
var array=[];
 var totalBg = document.getElementsByTagName('*')

 for(var i=0; i<totalBg.length;i++){
     var urlIm = totalBg[i].style.backgroundImage,
         urlSrc = totalBg[i].getAttribute('src');

     if(urlIm) {

        var re=/url\("\.{1,2}(.+)"\)/;
        var found = urlIm.match(re)
        var image=document.createElement('img')
            image.src=found[1];
         array.push(image);
     }
     if(urlSrc) array.push(totalBg[i]);
 }

for (var i = 0; i<array.length;i++) {
     var proc=0;
     array[i].onload=()=>{
         proc+=100/array.length;
         textProc.innerHTML = Math.round(proc-1)+'%'
     }
 }


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var skill = document.getElementsByClassName('js-skill__row');
var skillElements = [];
for (var i=0;i<skill.length; i++){
    skillElements[i] = skill[i];
}
window.onscroll= () =>{
    console.log(skillElements);

    skillElements.forEach(function (element, index, skillElements){
        var elPos = element.getBoundingClientRect()
        var activeEl = elPos.top+elPos.height - (window.innerHeight) ;
        console.log(elPos.top,elPos.height,window.innerHeight);

        if (activeEl<0){
            skillElements[index].classList.add('active');
            skillElements.splice(index,1);
        }
    })
}




/***/ }),
/* 4 */
/***/ (function(module, exports) {


var slides = [
    {
        image: 'bg-1',
        description: 'Дизайн интерьеров',
        tags: ['html', 'css'],
        link: "http://ya.ru"
    },
    {
        image: 'bg-2',
        description: 'Atma Yoga',
        tags: ['html', 'css', 'javascript', 'pug'],
        link: "http://ya.ru"
    },
    {
        image: 'bg-3',
        description: 'сайт школы онлайн образования',
        tags: ['html', 'css', 'javascript'],
        link: "http://loftshcool.com"
    },
    {
        image: 'bg-3',
        description: 'сайт школы ',
        tags: ['html', 'wwww', 'javascript'],
        link: "http://loftshcool.com"
    }
];
var activeSlide = 0;
var activeSlidePrev = slides.length-1;
var activeSlideNext = activeSlide+1;

var sliderTitle = document.getElementsByClassName('js-slider__title')[0],
    sliderSchool = document.getElementsByClassName('js-school')[0],
    sliderTags = document.getElementsByClassName('js-slider__tags')[0],
    sliderLink = document.getElementsByClassName('js-slider__link')[0],
    sliderImages = document.getElementsByClassName('js-slider__images')[0],
    sliderImagesPrev = document.getElementsByClassName('js-slider__images-prev')[0],
    sliderImagesPrevPic = sliderImagesPrev.children[0],
    sliderImagesPrevImg = sliderImagesPrev.children[0],
    sliderImagesNext = document.getElementsByClassName('js-slider__images-next')[0],
    sliderImagesNextPic = sliderImagesNext.children[0],
    sliderImagesNextImg = sliderImagesNext.children[0];

var flagSlider = true;

function inicial(activeSlide) {
    sliderTitle.innerHTML=slides[activeSlide].description;
    var slideBg = slides[activeSlide].image,
        slideBgPrev = slides[activeSlidePrev].image,
        slideBgNext = slides[activeSlideNext].image;
    var activeSlideTags = slides[activeSlide].tags
    sliderTags.innerHTML=activeSlideTags.join (", ");
    sliderImages.childNodes[1].srcset=`./images/content/${slideBg}.jpg, ./images/content/${slideBg}@2x.jpg 2x, ./images/content/${slideBg}@3x.jpg 3x`;
    sliderImages.childNodes[1].media="(max-width: 768px)";
    sliderImages.childNodes[2].src = `./images/content/${slideBg}@2x.jpg`;
    sliderImagesPrevPic.children[0].srcset=`./images/content/${slideBgPrev}.jpg, ./images/content/${slideBgPrev}@2x.jpg 2x, ./images/content/${slideBgPrev}@3x.jpg 3x`;
    sliderImagesPrevPic.children[0].media="(max-width: 768px)";
    sliderImagesPrevImg.children[1].src = `./images/content/${slideBgPrev}@2x.jpg`;
    sliderImagesNextPic.children[0].srcset=`./images/content/${slideBgNext}.jpg, ./images/content/${slideBgNext}@2x.jpg 2x, ./images/content/${slideBgNext}@3x.jpg 3x`;
    sliderImagesNextPic.children[0].media="(max-width: 768px)";
    sliderImagesNextImg.children[1].src = `./images/content/${slideBgNext}@2x.jpg`;
}

inicial(activeSlide)

function activeSl(active) {
    if (active<0) active= slides.length-1
    if (active>slides.length-1) active=0
    activeSlide = active
    activeSlidePrev = active-1;
    activeSlideNext = active+1;
    if(activeSlidePrev<0) activeSlidePrev = slides.length-1
    if(activeSlideNext>slides.length-1) activeSlideNext = 0


    sliderImages.style.cssText="opacity: 0;";
    sliderSchool.style.cssText="transform:translateX(-999px);";
    sliderImagesPrevPic.style.cssText="transform:translateY(-150%);";
    sliderImagesNextPic.style.cssText="transform:translateY(150%);";

    inicial(active)

    setTimeout(
        function () {
            sliderImages.style.cssText="transition: 2.5s; opacity: 1;"
            sliderSchool.style.cssText="transition: 1.5s; opacity: 1;"
            sliderImagesPrevPic.style.cssText="transition: 1s; opacity: 1;";
            sliderImagesNextPic.style.cssText="transition: 1s; opacity: 1;";
        },
        10
    )

    setTimeout(()=>{return flagSlider=true},1000);
}

sliderImagesPrev.onclick = function () {
    if(flagSlider){
        flagSlider = false;
        activeSlide--;
        activeSl(activeSlide);

    }

}

sliderImagesNext.onclick = function () {
    if(flagSlider){
        flagSlider = false;
        activeSlide++;
        activeSl(activeSlide);
    }

}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var headerPos = document.getElementsByClassName('header')[0].getBoundingClientRect();
var headerHeight = headerPos.height;
var blockLeft = document.getElementsByClassName('block-left')[0]
var menuFixLink = document.getElementsByClassName('block-left__link')[0];


menuFixLink.onclick = ()=>{
    console.log(blockLeft.classList.value);
    blockLeft.classList.value !== 'block-left block-left_active' ? blockLeft.classList.add('block-left_active') : blockLeft.classList.remove('block-left_active')
    console.log(blockLeft);

}

var articles = document.getElementsByClassName('js-block-right_articles');
var articlesChild = articles[0].children;
var menuLink = document.getElementsByClassName('nav-article__items');

for(var z =0;z<menuLink.length;z++){
    menuLink[z].onclick = (e)=>{

        var numberArticle = e.toElement.getAttribute('data-name');
        for(var x =0; x<articles[0].children.length;x++){

            if(articles[0].children[x].getAttribute('data-name') == numberArticle)  var scrollPosition = articles[0].children[x].offsetTop+headerHeight;
        }
        windPos = window.pageYOffset;
        var coord = scrollPosition-20;
        var top = windPos;

        var scr = setInterval(function () {
            if(top<coord){
                top +=5;
                window.scrollTo(0, top);
                if (top > coord) {
                    clearInterval(scr);
                }
            }else {
                top -=5;
                window.scrollTo(0, top);
                if (top < coord) {
                    clearInterval(scr);
                }
            }
        }, 5);
    }
}


window.onscroll= () =>{
    var docWidth = document.documentElement.clientWidth ;

    headerPos = document.getElementsByClassName('header')[0].getBoundingClientRect();
    headerHeight = headerPos.height;

    var blockLeftPos = blockLeft.getBoundingClientRect();
    var blockLeftPosLeft = blockLeftPos.left;
    var menuNav = document.getElementsByClassName('js-nav-article')[0];
    var menuNavPos = menuNav.getBoundingClientRect();
    var menuNavWidth = menuNavPos.width;


    var windPos = window.pageYOffset+30;
    if(docWidth>768){
        windPos>headerHeight ? menuNav.style.cssText=`position: fixed; top:25px; left:${blockLeftPosLeft}; width:${menuNavWidth}px;` : menuNav.style.cssText='position: relative; '
    }
    var articlesPos = articles[0].getBoundingClientRect();
    if(articlesPos.top<0){

        for(var i=0; i<articlesChild.length;i++){
            var articlePosCh = articlesChild[i].offsetTop+headerHeight;
            var articlePosBlock = articlesChild[i].getBoundingClientRect();
            if (windPos>articlePosCh-50 && windPos<articlePosBlock.height+articlePosCh-50){
                var elMenuNav = menuNav.getElementsByClassName('nav-article__list')[0];
                for(var z =0; z<elMenuNav.children.length; z++){
                    if (elMenuNav.children[i]!==elMenuNav.children[z]) {
                        elMenuNav.children[z].classList.remove('nav-article__items-active')
                    }
                }
                 elMenuNav.children[i].classList.add('nav-article__items-active')
            }
        }
    }

}





/***/ })
/******/ ]);