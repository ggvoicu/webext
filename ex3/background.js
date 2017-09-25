function getNameData(request, sender, sendResponse){
    var param = request.val;
    var url = 'http://carcompanion.16mb.com/backend/script.php?q=';
    $.getJSON(url+param, function(data){
        var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {'val' : data});
        }); 
    })
}   

browser.runtime.onMessage.addListener(getNameData);