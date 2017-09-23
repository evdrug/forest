
var btnAvt = document.getElementsByClassName('btn-avt'),
    blockAvt = document.getElementsByClassName('welcome__form-wrapper'),
    btnIndex = document.getElementsByClassName('index'),
    btnHumb = document.getElementsByClassName('hamburger__link'),
    menHumb = document.getElementsByClassName('menu-hamb'),
    iconHumb = document.getElementsByClassName('hamburger'),
    preloader = document.getElementById('preloader-page');



window.onload = ()=> {
    preloader.setAttribute('style', 'display: none;');




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
}

