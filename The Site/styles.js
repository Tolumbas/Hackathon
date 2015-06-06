var json = "undefined";

function jsonp(j){
	json=j;
	console.log("got it!");
}

function setEvent(a){
	$("#" + a).click(function(){
		console.log(a);
		for (var b=0;b<json.array[a].form.length;b++){
			$("div.form").append("<div class = 'formholder'></div>");	
			$("div.formholder:last").append("<span class = 'desc'> "+json.array[a].form[b].desc+"</span>");	
			if (json.array[a].form[b].type=="textinput") // TEXT
				$("div.formholder:last").append("<input class = 'box' type = 'text' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b].type=="telephone") // TELEPHONE
				$("div.formholder:last").append("<input class = 'box' type = 'tel' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b].type=="emailinput") // EMAIL
				$("div.formholder:last").append("<input class = 'box' type = 'email' name='"+json.array[a].form[b].name+"'>");
			if (json.array[a].form[b].type=="fileinput") // FILE
				$("div.formholder:last").append("<input class = 'box' type = 'file' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b].type=="checkbox") // CHECKBOX
				$("div.formholder:last").append("<input class = 'box' type = 'checkbox' name='"+json.array[a].form[b].name+"'>");	
				
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