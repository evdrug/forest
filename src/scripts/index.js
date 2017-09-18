// import './map'


var btnAvt = document.getElementsByClassName('btn-avt'),
    blockAvt = document.getElementsByClassName('welcome__form-wrapper'),
    btnIndex = document.getElementsByClassName('index');

    btnAvt = btnAvt[0];
    blockAvt = blockAvt[0];
    btnIndex = btnIndex[0];


btnAvt.onclick = function (e) {
    e.preventDefault();
    blockAvt.classList.add('flipped')
    btnAvt.classList.add('none');
}

btnIndex.onclick = function (e) {
    e.preventDefault();
    blockAvt.classList.remove('flipped')
    btnAvt.classList.remove('none');
}


