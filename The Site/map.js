var map;
var marker;
var def=new google.maps.LatLng(42.75, 25.5);
var defaultOptions = {
    zoom: 8,
  };
function init(){
map = new google.maps.Map(document.getElementById('map-canvas'),defaultOptions);
map.setCenter(def);
 marker = new google.maps.Marker({
      position: def,
      map: map,
	  draggable:true,
      title: 'Error: Location Services are disabled.'
  });
navigator.geolocation.getCurrentPosition(success);
}
function success(bla) {
var pos=new google.maps.LatLng(bla.coords.latitude,bla.coords.longitude);

  var mapOptions = {
    zoom: 18,
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	  map.setCenter(pos);
	  map.setZoom(18);
	  
	  marker = new google.maps.Marker({
      position: pos,
      map: map,
	  draggable:true,
      title: 'Location'
	  });
}
//google.maps.event.addDomListener(window, 'load', init);
function getlat(){ return marker.getPosition().lat();}
function getlng(){ return marker.getPosition().lng();}