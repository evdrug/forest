var skill = document.getElementsByClassName('js-skill-row');
var skillElements = [];
for (var i = 0;i < skill.length; i++){
    skillElements[i] = skill[i];
}
window.onscroll= () =>{
    skillElements.forEach(function (element, index, skillElements){
        var elPos = element.getBoundingClientRect()
        var activeEl = elPos.top+elPos.height - (window.innerHeight) ;

        if (activeEl < 0){
            skillElements[index].classList.add('active');
            skillElements.splice(index,1);
        }
    })
}


