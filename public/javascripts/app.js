// var L 	= require('leaflet')

$(document).ready(function () {
    var map = L.map( 'map-canvas', {zoomControl:false, center: [21.99, 77.99], zoom: 5 } );
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.tileLayer("http://localhost:8080/geoserver/wms?bbox=58.10,5.06,103.19,37.24&Format=image/png&request=GetMap&layers=India:State&width=256&height=256&srs=EPSG:4326&TRANSPARENT=TRUE&tiled=true").addTo(map);
    L.control.zoom({
     position:'bottomright'
	}).addTo(map);

	});

