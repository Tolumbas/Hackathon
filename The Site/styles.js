var json = "undefined";

function jsonp(j){
	json=j;
	console.log("got it!");
}

function setEvent(a){
	$("#" + a).click(function(){
		console.log(a);
		for (var b=0;b<json.array[a].form.length;b++){
			$("div.form").append("<span class = 'desc'> "+json.array[a].form[b].desc+"</span>");	
			if (json.array[a].form[b]==0) // TEXT
				$("div.form").append("<input class = 'text' type = 'text' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b]==1) // TELEPHONE
				$("div.form").append("<input class = 'text' type = 'tel' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b]==2) // TELEPHONE
				$("div.form").append("<input class = 'text' type = 'tel' name='"+json.array[a].form[b].name+"'>");	
		}
		$("div.holder").animate({left:"-105%"});
	});
}

jQuery(document).ready(
function(){
	console.log("Hello jQuery!");
	if(json!="undefined"){
		for (var a=0;a<json.array.length;a++){
		$("div.buttons").append(
		"<button class='default' id='"+a+"' name='"+json.array[a].name+"'>"+ json.array[a].name + "</button>"
		);
		setEvent(a);
		console.log(a);

	}
	}
});