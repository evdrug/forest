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


__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);





/***/ }),
/* 1 */
/***/ (function(module, exports) {

var btnAvt = document.getElementsByClassName('btn-avt'),
    blockAvt = document.getElementsByClassName('welcome__form-wrapper'),
    btnIndex = document.getElementsByClassName('index'),
    menHumb = document.getElementsByClassName('menu-hamb'),
    iconHumb = document.getElementsByClassName('hamburger'),
    preloader = document.getElementById('preloader-page'),
    bg = document.getElementsByClassName('flipp'),
    formInput = document.getElementsByClassName('fotm__input-text'),
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
    formInput = formInput[0];
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
            console.log(pos);
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

 var totalBg = document.body.getElementsByTagName('*');


console.log(totalBg);
//
// for( var i =1; i<=totalBg.length; i++) {
//     totalBg[i].load(console.log(i/totalBg.length*100));
// }


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var pageActive = window.location.pathname;
if(-1 !== pageActive.indexOf('about')){
    var skill = document.getElementsByClassName('skill__row');
    var skillElements = [];
    for (var i=0;i<skill.length; i++){
        skillElements[i] = skill[i];
    }
    window.onscroll= () =>{
        skillElements.forEach(function (element, index, skillElements){
            var elPos = element.getBoundingClientRect()
            var activeEl = elPos.top+elPos.height - (window.innerHeight) ;
            if (activeEl<0){
                skillElements[index].classList.add('active');
                delete skillElements[index];
            }
        })
    }
}



/***/ })
/******/ ]);