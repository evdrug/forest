var form = document.getElementsByClassName('contact-form')[0];
var preg = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

var formAut = document.getElementsByClassName('js-form-aut')[0];

function inputOnfocus(collection) {
    for (var z = 0; z< collection.length; z++) {
        collection[z].onfocus =function (e) {
            this.nextElementSibling.setAttribute('style', 'display: none');
            this.classList.remove('error-input');
        }
    }
}

function validateInput(input) {
    if (!input.value){
        input.classList.add('error-input');
        input.nextElementSibling.innerHTML="Не заполнено поле"
        input.nextElementSibling.setAttribute('style', 'display: block')
        return 0
    }else{
        return 1
    }
}

function validateEmail(inputEmail) {
    if (inputEmail.value && !inputEmail.value.match(preg)){
        inputEmail.classList.add('error-input');
        inputEmail.nextElementSibling.innerHTML="Не корректный email"
        inputEmail.nextElementSibling.setAttribute('style', 'display: block')
        return 0
    }else{
        return 1
    }
}

function clearError(error) {
    error.classList.remove('error-input');
    error.nextElementSibling.innerHTML=""
    error.nextElementSibling.setAttribute('style', 'display: none')
}

function clearInput(block){
    for (var i = 0; i < block.length; i++) {
        block[i].value = "";
        clearError(block[i]);
    }
}



if(form){
    var revInput = form.getElementsByClassName('js-form-input');
    var revInputEmail = form.getElementsByClassName('js-form-input-email')[0];
    var revEnter = form.getElementsByClassName('js-form-btn-enter')[0];
    var revReset = form.getElementsByClassName('js-form-btn-reset')[0];


    inputOnfocus(revInput);

    revEnter.onclick = function(e){
        e.preventDefault();
        for(var i =0;i<revInput.length;i++){

            clearError(revInput[i])
            if (validateInput(revInput[i])){
                if (!validateEmail(revInputEmail)){
                    return
                }
                continue
            } else {
                return;
            }
        }
    }
    revReset.onclick = function(e) {
        e.preventDefault();
        clearInput(revInput);
    }
}

if(formAut) {
    var avtInput = formAut.getElementsByClassName('js-form-input');
    var signIn = formAut.getElementsByClassName('js-signin')[0];
    var revInput = formAut.getElementsByClassName('js-form-input');
    console.log(signIn)

    inputOnfocus(avtInput);

    signIn.onclick = function(e){
        e.preventDefault();
        for(var i =0;i<revInput.length;i++){
            clearError(revInput[i])
            if (validateInput(revInput[i])){
                continue
            } else {
                return;
            }
        }
    }
}



