// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var currentTime = Date.now();


$(document).on("ready", function() {
  var marker = [];
    // CODE IN HERE!
    var map;
    var marker = [];
    function initMap() {
      var lt = quakeInfo.features[1].geometry.coordinates[0];
      var lg = quakeInfo.features[1].geometry.coordinates[1];
      console.log(quakeInfo.features[1].geometry.coordinates[0]);
      console.log(quakeInfo.features[1].geometry.coordinates[1]);
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lg, lng: lt},
        zoom: 8});

for (var i = 0; i<quakeInfo.features.length; i++){
        var place = {lat: quakeInfo.features[i].geometry.coordinates[1], lng: quakeInfo.features[i].geometry.coordinates[0]};
        var hoursAgo = (currentTime-(quakeInfo.features[i].properties.time))/(1000*60*60);
        marker = new google.maps.Marker({
            position: place,
            map: map,
            title: quakeInfo.features[i].properties.title
        });
        var infoWindow = new google.maps.InfoWindow({
            content: hoursAgo+' hours ago.'
        });
        marker.addListener('click', function() {infoWindow.open(map, marker)});

      }
    }
initMap();
});
//    var source = $('#earthquakes').html();
  //  var template = Handlebars.compile(source);
//    var appendHTML = template({features: quakeData.features});
