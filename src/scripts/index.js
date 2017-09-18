

var btnAvt = document.getElementsByClassName('btn-avt'),
    blockAvt = document.getElementsByClassName('welcome__form-wrapper'),
    btnIndex = document.getElementsByClassName('index'),
    btnHumb = document.getElementsByClassName('hamburger__link'),
    menHumb = document.getElementsByClassName('meniHamb'),
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
    iconHumbAct = document.getElementsByClassName('hamburger_active');
    if(iconHumbAct[0]) {
        menHumb.classList.remove('meniHamb_active')
        iconHumb.classList.remove('hamburger_active');
        document.body.style.overflow = 'auto';
    }else{
        menHumb.classList.add('meniHamb_active')
        iconHumb.classList.add('hamburger_active');
        document.body.style.overflow = 'hidden';
    }

}


