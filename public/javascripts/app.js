// var L 	= require('leaflet')

$(document).ready(function () {
    var map = L.map( 'map-canvas', {zoomControl:false, center: [21.99, 77.99], zoom: 5 } );
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
	
	$.getJSON("../states.geojson", function(geojson) {
		console.log(geojson)
                L.geoJSON(geojson).addTo(map);
            });
	});

