// var L 	= require('leaflet')

$(document).ready(function () {
    var map = L.map( 'map-canvas', { center: [-31.95, 115.86], zoom: 11 } );
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

	});