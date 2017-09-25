function duteVino(request, sender, sendResponse){
	if(request["val"])
	{
		showData(request.val);
	} else {
		addInput();
	}	
}

function addInput(){
    var input = $('<input id="cauta">');
    $('#primary').prepend(input);
	var elem = $('<div></div>').attr("id","rezultate");
	$("#cauta").append(elem);
    input.keyup(getVal);
}

function getVal(){
    var data = $('#cauta').val();
    browser.runtime.sendMessage({'val' : data}).then(showData);
}

function showData(message){
	console.log(message.results);
	//var rez = $("#rezultate");
    //rez.text(message.results);
	document.getElementById('rezultate').innerHTML = message.results;
}

var elem = $('<div></div>').attr("id","rezultate");
$("#primary").prepend(elem);
var input = $('<input id="cauta">');
$('#primary').prepend(input);
input.keyup(getVal);

browser.runtime.onMessage.addListener(duteVino);
