 // var totalBg = document.getElementById('preloader-page')
// console.log(totalBg.style.backgroundImage);
var array=[];
 var totalBg = document.getElementsByTagName('*')
    console.log(totalBg)

 for(var i=0; i<totalBg.length;i++){
     if(totalBg[i].style.backgroundImage  || totalBg[i].getAttribute('src')) array.push(totalBg[i].style.backgroundImage||totalBg[i].getAttribute('src'));
     // console.log()

 }
 console.log(array)

 // totalBg.forEach(function(item,i,totalBg){
 //    console.log(item)
 // })


 //
// for( var i =1; i<=totalBg.length; i++) {
//     totalBg[i].load(console.log(i/totalBg.length*100));
// }
