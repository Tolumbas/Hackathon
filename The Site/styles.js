var json = "undefined";
document.addEventListener("backbutton", function(e){
e.preventDefault();
}, false);
function jsonp(j){
	json=j;
	console.log("got it!");
}

function setEvent(a){
	$("#" + a).click(function(){
		console.log(a);
		$("div.input").show();
		$("div.form").append("<div class='formtitle'></div>");
		$("div.formtitle").append(
		"<div style='height:80%;width:100%'><button class='back'>НАЗАД</button><img class='title' src="+json.array[a].img+"></img></div>"
		);
		$("button.back").click(function(){
		$("div.holder").animate({left:"0"});
		$("div.form").empty();
		});
		for (var b=0;b<json.array[a].form.length;b++){
			var s1 = json.array[a].form[b].desc;
			var s2 = json.array[a].form[b].must=="true"?'*':' ';
			var s3 = s1.concat(s2);
			$("div.form").append("<div class = 'formholder'></div>");	
			$("div.formholder:last").append("<span class = 'desc'> "+s3+"</span>");	
			if (json.array[a].form[b].type=="textinput") // TEXT
				$("div.formholder:last").append("<input class = 'box' type = 'text' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b].type=="telephone") // TELEPHONE
				$("div.formholder:last").append("<input class = 'box' type = 'tel' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b].type=="emailinput") // EMAIL
				$("div.formholder:last").append("<input class = 'box' type = 'email' name='"+json.array[a].form[b].name+"'>");
			if (json.array[a].form[b].type=="fileinput") // FILE
				$("div.formholder:last").append("<input class = 'box' type = 'file' capture='camera' name='"+json.array[a].form[b].name+"'>");	
			if (json.array[a].form[b].type=="checkbox") // CHECKBOX
				$("div.formholder:last").append("<input class = 'box' type = 'checkbox' name='"+json.array[a].form[b].name+"'>");
			if (json.array[a].form[b].type=="dateinput") // DATE
				$("div.formholder:last").append("<input class = 'box' type = 'date' name='"+json.array[a].form[b].name+"'>");
			if (json.array[a].form[b].type=="urlinput") // URL
				$("div.formholder:last").append("<input class = 'box' type = 'url' name='"+json.array[a].form[b].name+"'>");						
		}
		$("div.form").append("<div class = 'formholder'></div>");	
		$("div.formholder:last").append("<center><input class='submit' type='submit' value='Изпрати'></center>");
		$("div.holder").animate({left:"-105%"});
	});
}

jQuery(document).ready(
function(){
	console.log("Hello jQuery!");
	$("div.input").hide();
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