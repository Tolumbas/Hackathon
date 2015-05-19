var json,success;

function jsonp(j){
	json=j;
	for (var a=0;a<json.array.length;a++){
		$("div.buttons").append(
		"<button class='default' id='"+json.array[a].name+"' name='"+json.array[a].name+"'>"+ json.array[a].name + "</button>"
	);
	}
	console.log("got it!");
	}

jQuery(document).ready(
function(){
	jQuery.ajax({ 
        type: 'GET',
        url: 'http://anton.usr.me/responcive/myjson.json' ,
        dataType: 'jsonp', 
        success: function() {console.log("success");}
	});
	console.log("Hello jQuery!");
});