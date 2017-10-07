var headerPos = document.getElementsByClassName('header')[0].getBoundingClientRect();
var headerHeight = headerPos.height;
var blockLeft = document.getElementsByClassName('block-left')[0]
var menuFixLink = document.getElementsByClassName('block-left__link')[0];


menuFixLink.onclick = ()=>{
    blockLeft.classList.value !== 'block-left block-left_active' ? blockLeft.classList.add('block-left_active') : blockLeft.classList.remove('block-left_active')

}

var articles = document.getElementsByClassName('js-block-right-articles');
var articlesChild = articles[0].children;
var menuLink = document.getElementsByClassName('nav-article__items');

for(var z = 0;z < menuLink.length; z++){
    menuLink[z].onclick = (e)=>{

        var numberArticle = e.toElement.getAttribute('data-name');
        for(var x = 0; x < articles[0].children.length; x++){

            if(articles[0].children[x].getAttribute('data-name') == numberArticle)  var scrollPosition = articles[0].children[x].offsetTop+headerHeight;
        }
        windPos = window.pageYOffset;
        var coord = scrollPosition-20;
        var top = windPos;

        var scr = setInterval(function () {
            if(top < coord){
                top += 5;
                window.scrollTo(0, top);
                if (top > coord) {
                    clearInterval(scr);
                }
            }else {
                top -=5;
                window.scrollTo(0, top);
                if (top < coord) {
                    clearInterval(scr);
                }
            }
        }, 5);
    }
}


window.onscroll= () =>{
    var docWidth = document.documentElement.clientWidth ;

    headerPos = document.getElementsByClassName('header')[0].getBoundingClientRect();
    headerHeight = headerPos.height;

    var blockLeftPos = blockLeft.getBoundingClientRect();
    var blockLeftPosLeft = blockLeftPos.left;
    var menuNav = document.getElementsByClassName('js-nav-article')[0];
    var menuNavPos = menuNav.getBoundingClientRect();
    var menuNavWidth = menuNavPos.width;


    var windPos = window.pageYOffset+30;
    if(docWidth > 768){
        windPos>headerHeight ? menuNav.style.cssText = `position: fixed; top:25px; left:${blockLeftPosLeft}; width:${menuNavWidth}px;` : menuNav.style.cssText='position: relative; '
    }
    var articlesPos = articles[0].getBoundingClientRect();
    if(articlesPos.top<0){

        for(var i = 0; i < articlesChild.length; i++){
            var articlePosCh = articlesChild[i].offsetTop+headerHeight;
            var articlePosBlock = articlesChild[i].getBoundingClientRect();
            if (windPos > articlePosCh - 50 && windPos < articlePosBlock.height + articlePosCh - 50){
                var elMenuNav = menuNav.getElementsByClassName('nav-article__list')[0];
                for(var z = 0; z < elMenuNav.children.length; z++){
                    if (elMenuNav.children[i] !== elMenuNav.children[z]) {
                        elMenuNav.children[z].classList.remove('nav-article__items-active')
                    }
                }
                 elMenuNav.children[i].classList.add('nav-article__items-active')
            }
        }
    }

}



