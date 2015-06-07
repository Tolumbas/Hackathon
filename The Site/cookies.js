function readCookie(div, name){
var y=getCookie(name);
if(y!=""){
	var q=y.split('=');
	$(div).val(q[q.length-1]);
}
else{
	$(div).val("");
}
}
function writeCookie(div, name){
var y=getCookie(name);   
document.cookie=name+"="+$(div).val()+ "; expires=Thu, 21 Mar 2097 12:00:00 UTC";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}