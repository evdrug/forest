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
    // titleH1 = document.getElementsByTagName('h1');
    titleH1 = document.getElementsByClassName('block-triangle'),
    worksWrapper = document.getElementsByClassName('works-wrapper');



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
    worksWrapper = worksWrapper[0];
    var pos = titleH1.getBoundingClientRect();



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
            windPos = window.pageYOffset;
            var coord = pos.top+pos.height-20;
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
            windPos = window.pageYOffset;
            var coord = pos.top+pos.height-20;
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