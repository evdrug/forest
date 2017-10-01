var form = document.getElementsByClassName('contact-form')[0];
var revInput = form.getElementsByClassName('js-form__input');
var revEnter = form.getElementsByClassName('js-form__btn_enter')[0];

revEnter.onclick = function(e){
    e.preventDefault();
    for(var i =0;i<revInput.length;i++){
        if(!revInput[i].value){
            console.log(revInput[i].value='не заполнено поле');
        }
    }
}