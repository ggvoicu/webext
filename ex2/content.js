var allImg = document.getElementsByTagName("IMG");
var replacePic = browser.extension.getURL("picture.jpg");

console.log("test");

function imgReplace(request){
	console.log(request);
	for ( var i=0; i < allImg.length; i++){
	allImg[i].src = request.imgURL;
	}
}

browser.runtime.onMessage.addListener(imgReplace);


