var doc = document;
var navAdminLink = doc.getElementsByClassName('js-admin-link');
var blockLink = doc.getElementsByClassName('section-content__tab');
var formBlog = doc.getElementsByClassName('js-form-blog');

var btnSaveBlog = doc.getElementsByClassName('js-save-blog')[0];

function clearActive() {
    for (var i = 0; i < navAdminLink.length; i++) {
        navAdminLink[i].classList.remove('nav-admin__link-active');
        blockLink[i].classList.remove('section-content__tab-active');
    }
}

function activeBlock(data) {
    for(var z = 0; z < blockLink.length; z++){
        if(blockLink[z].getAttribute('data-name') == data) {
            blockLink[z].classList.add('section-content__tab-active');
        }
    }
}

for (var i = 0; i < navAdminLink.length; i++) {
    navAdminLink[i].onclick = (e)=> {
        clearActive();
        e.toElement.classList.add('nav-admin__link-active');
        var activeBlockData = e.toElement.getAttribute('data-name');
        activeBlock(activeBlockData);
    }
}

btnSaveBlog.onclick = (e)=>{
    e.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.open('POST',"http://localhost:3000/api/blog",true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var dataFull = formBlog[0].getElementsByTagName('input');
    var dataArea = formBlog[0].getElementsByTagName('textarea')[0];
    var ObjRes={}
    for( var i = 0; i < dataFull.length; i++){
        ObjRes[dataFull[i].name] = dataFull[i].value;
    }
    ObjRes[dataArea.name] = dataArea.value;
    xhr.send(JSON.stringify(ObjRes))
    xhr.addEventListener('load', ()=>{
        if(xhr.status == 201){
            console.log(xhr.response)
        }else {
            console.log(xhr)
        }
    })

}