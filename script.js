var allImg = document.getElementsByTagName("IMG");
var replacePic = browser.extension.getURL("picture.jpg");

function activatePics(){
	console.log("test");
	
	for ( var i=0; i < allImg.length; i++){
	allImg[i].src = replacePic;
	}
}

