var textProc = document.getElementsByClassName('js-text-svg-prel');
textProc = textProc[0];
var array = [];
 var totalBg = document.getElementsByTagName('*')

 for(var i = 0; i < totalBg.length; i++){
     var urlIm = totalBg[i].style.backgroundImage,
         urlSrc = totalBg[i].getAttribute('src');

     if(urlIm) {

        var re = /url\("\.{1,2}(.+)"\)/;
        var found = urlIm.match(re)
        var image = document.createElement('img')
            image.src = found[1];
         array.push(image);
     }
     if(urlSrc) array.push(totalBg[i]);
 }

for (var i = 0; i < array.length; i++) {
     var proc = 0;
     array[i].onload = ()=>{
         proc += 100/array.length;
         textProc.innerHTML = Math.round(proc -1 ) + '%'
     }
 }
