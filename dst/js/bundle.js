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
/***/ (function(module, exports) {


var btnAvt = document.getElementsByClassName('btn-avt'),
    blockAvt = document.getElementsByClassName('welcome__form-wrapper'),
    btnIndex = document.getElementsByClassName('index'),
    btnHumb = document.getElementsByClassName('hamburger__link'),
    menHumb = document.getElementsByClassName('menu-hamb'),
    iconHumb = document.getElementsByClassName('hamburger');

    btnAvt = btnAvt[0];
    blockAvt = blockAvt[0];
    btnIndex = btnIndex[0];
    btnHumb =   btnHumb[0];
    menHumb = menHumb[0];
    iconHumb = iconHumb[0];


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




/***/ })
/******/ ]);