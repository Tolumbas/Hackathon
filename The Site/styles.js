var json = "undefined";
var bool = true;

function jsonp(j){
	json=j;
	console.log("got it!");
}
function isMain(){
try{window.cpjs.sendToAndroid(bool);}
catch(e){}
}
function setEvent(a){
	$("#" + a).click(function(){
		console.log(a);
		$("div.input").show();
		$("div.form").append("<div class='formtitle'></div>");
		$("div.formtitle").append(
		"<div style='height:80%;width:100%'><img class='back' src='back.png'></button><img class='title' src="+json.array[a].img+"></img></div>"
		);
		$("img.back").click(function(){
			$("div.holder").animate({left:"0"});
			$("div.form").empty();
			bool = true;
		});
		$("div.form").append("<form id='frm' method='POST' action="+json.array[a].link+" onsubmit='return false'></form>")
		for (var b=0;b<json.array[a].form.length;b++){
			var s1 = json.array[a].form[b].desc;
			var s2 = json.array[a].form[b].must=="true"?'*':' ';
			var s3 = s1.concat(s2);
			$("#frm").append("<div class = 'formholder'></div>");
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
			if (json.array[a].form[b].type=="mapinput"){ // MAP
				$("div.formholder:last").css({"height":"400px"});
				$("span.desc:last").css({"clear":"both","width":"100%","text-align":"center"});
				$("div.formholder:last").append(
					"<div id='map-canvas'></div><input class = 'box' style='position:absolute;visibility: hidden;height:0' readonly='readonly' type = 'text' name='"+json.array[a].form[b].name+"'>"
				);						
				init();
				$("input[readonly^=readonly]").val(getlat().toString()+getlng().toString());
				$("#map-canvas").mouseup(function(){$("input[readonly^=readonly]").val(getlat().toString()+" "+getlng().toString());});
			}
		}
		for (var b=0;b<json.array[a].form.length;b++){
			readCookie("input.box:eq("+b+")",json.array[a].form[b].search);
		}
		$("#frm").append("<div class = 'formholder'></div>");	
		$("div.formholder:last").append("<center><button class='submit2'>Изпрати</button></center>");
		$("button.submit2").click(function(){
			for (var b=0;b<json.array[a].form.length;b++){
				if (json.array[a].form[b].must == "true" && $("input.box:eq("+b+")").val()==''){
					alert("Попълни всички задължителни полета!");
					return;
				}
			}
			for (var b=0;b<json.array[a].form.length;b++){
				writeCookie("input.box:eq("+b+")",json.array[a].form[b].search);
			}
			alert("Сигналът е подаден!");
		});
		$("div.holder").animate({left:"-105%"});
		bool = false;
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