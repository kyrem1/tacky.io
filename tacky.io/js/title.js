var x=0;
var titleText=["j","jh","jha","jhar","jharb","jharb.","jharb.i","jharb.io","jharb.i:","jharb.","jharb.","jharb","jhar","jha","jh"];
function loop() {
    document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];
}


setInterval(function() {
    document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];
},600);
