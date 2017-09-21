browser.browserAction.onClicked.addListener(function(){
	browser.tabs.sendMessage("Start")
});

