// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
  // CODE IN HERE!
var map;
var marker = [];

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13
  });
  var place = {lat: 40.719526, lng: -74.0089934};
  var marker = new google.maps.Marker({
    position: place,
    map: map,
    title: 'Its a PIN!'
  });
  var infoWindow = new google.maps.InfoWindow({
    content: 'Do you ever feel like an InfoWindow, floating through the wind,'+
        ' ready to start again?'
  });
  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
}
initMap();
});
