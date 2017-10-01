
var slides = [
    {
        image: 'bg-1',
        description: 'Дизайн интерьеров',
        tags: ['html', 'css'],
        link: "http://ya.ru"
    },
    {
        image: 'bg-2',
        description: 'Atma Yoga',
        tags: ['html', 'css', 'javascript', 'pug'],
        link: "http://ya.ru"
    },
    {
        image: 'bg-3',
        description: 'сайт школы онлайн образования',
        tags: ['html', 'css', 'javascript'],
        link: "http://loftshcool.com"
    },
    {
        image: 'bg-3',
        description: 'сайт школы ',
        tags: ['html', 'wwww', 'javascript'],
        link: "http://loftshcool.com"
    }
];
var activeSlide = 0;
var activeSlidePrev = slides.length-1;
var activeSlideNext = activeSlide+1;

var sliderTitle = document.getElementsByClassName('js-slider__title')[0],
    sliderSchool = document.getElementsByClassName('js-school')[0],
    sliderTags = document.getElementsByClassName('js-slider__tags')[0],
    sliderLink = document.getElementsByClassName('js-slider__link')[0],
    sliderImages = document.getElementsByClassName('js-slider__images')[0],
    sliderImagesPrev = document.getElementsByClassName('js-slider__images-prev')[0],
    sliderImagesPrevPic = sliderImagesPrev.children[0],
    sliderImagesPrevImg = sliderImagesPrev.children[0],
    sliderImagesNext = document.getElementsByClassName('js-slider__images-next')[0],
    sliderImagesNextPic = sliderImagesNext.children[0],
    sliderImagesNextImg = sliderImagesNext.children[0];

var flagSlider = true;

function inicial(activeSlide) {
    sliderTitle.innerHTML=slides[activeSlide].description;
    var slideBg = slides[activeSlide].image,
        slideBgPrev = slides[activeSlidePrev].image,
        slideBgNext = slides[activeSlideNext].image;
    var activeSlideTags = slides[activeSlide].tags
    sliderTags.innerHTML=activeSlideTags.join (", ");
    sliderImages.childNodes[1].srcset=`./images/content/${slideBg}.jpg, ./images/content/${slideBg}@2x.jpg 2x, ./images/content/${slideBg}@3x.jpg 3x`;
    sliderImages.childNodes[1].media="(max-width: 768px)";
    sliderImages.childNodes[2].src = `./images/content/${slideBg}@2x.jpg`;
    sliderImagesPrevPic.children[0].srcset=`./images/content/${slideBgPrev}.jpg, ./images/content/${slideBgPrev}@2x.jpg 2x, ./images/content/${slideBgPrev}@3x.jpg 3x`;
    sliderImagesPrevPic.children[0].media="(max-width: 768px)";
    sliderImagesPrevImg.children[1].src = `./images/content/${slideBgPrev}@2x.jpg`;
    sliderImagesNextPic.children[0].srcset=`./images/content/${slideBgNext}.jpg, ./images/content/${slideBgNext}@2x.jpg 2x, ./images/content/${slideBgNext}@3x.jpg 3x`;
    sliderImagesNextPic.children[0].media="(max-width: 768px)";
    sliderImagesNextImg.children[1].src = `./images/content/${slideBgNext}@2x.jpg`;
}

inicial(activeSlide)

function activeSl(active) {
    if (active<0) active= slides.length-1
    if (active>slides.length-1) active=0
    activeSlide = active
    activeSlidePrev = active-1;
    activeSlideNext = active+1;
    if(activeSlidePrev<0) activeSlidePrev = slides.length-1
    if(activeSlideNext>slides.length-1) activeSlideNext = 0


    sliderImages.style.cssText="opacity: 0;";
    sliderSchool.style.cssText="transform:translateX(-999px);";
    sliderImagesPrevPic.style.cssText="transform:translateY(-150%);";
    sliderImagesNextPic.style.cssText="transform:translateY(150%);";

    inicial(active)

    setTimeout(
        function () {
            sliderImages.style.cssText="transition: 2.5s; opacity: 1;"
            sliderSchool.style.cssText="transition: 1.5s; opacity: 1;"
            sliderImagesPrevPic.style.cssText="transition: 1s; opacity: 1;";
            sliderImagesNextPic.style.cssText="transition: 1s; opacity: 1;";
        },
        10
    )

    setTimeout(()=>{return flagSlider=true},1000);
}

sliderImagesPrev.onclick = function () {
    if(flagSlider){
        flagSlider = false;
        activeSlide--;
        activeSl(activeSlide);

    }

}

sliderImagesNext.onclick = function () {
    if(flagSlider){
        flagSlider = false;
        activeSlide++;
        activeSl(activeSlide);
    }

}
