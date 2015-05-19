var json,success;

function jsonp(j){
	json=j;
	console.log("got it!");
	for (var a=0;a<json.array.length;a++){
		$("div.buttons").append(
		"<button class='default' id='"+json.array[a].name+"' name='"+json.array[a].name+"'>"+ json.array[a].name + "</button>"
		);
		$(".default").click(function(){
			$("div.holder").animate({left:"-105%"});
		});
	}
	
	
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