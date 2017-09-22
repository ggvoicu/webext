document.getElementById("urlButton").addEventListener("click", function(){
	console.log("ceva");
    var imgURL = document.getElementById("inputURL").value;
	console.log(imgURL);

    browser.tabs.executeScript(null, {
		file: "content.js"
    });
	
	var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
		console.log("msg1");
      browser.tabs.sendMessage(tabs[0].id, {imgURL: imgURL});
	  console.log("msg2");
    });
	
});