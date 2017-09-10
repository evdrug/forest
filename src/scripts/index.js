var btnAvt = document.getElementsByClassName('btn-singin'),
    blockAvt = document.getElementsByClassName('wrapper__form');

    btnAvt = btnAvt[0];
    blockAvt = blockAvt[0];


btnAvt.onclick = function (e) {
    e.preventDefault();
    blockAvt.classList.add('flipped')
    btnAvt.classList.add('none');
}