var allImg = document.getElementsByTagName("IMG");
var replacePic = browser.extension.getURL("picture.jpg");
for ( var i=0; i < allImg.length; i++){
allImg[i].src = replacePic;
}