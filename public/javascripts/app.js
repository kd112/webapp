// var L 	= require('leaflet')

$(document).ready(function () {
    var map = L.map( 'map-canvas', {zoomControl:false, center: [21.99, 77.99], zoom: 5 } );
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // var gj= new L.geoJSON();
    // console.log(gj);
    // map.on("load",function(){
    //     console.log("load");
    // })
    //load the layers on zoom
    $.getJSON("/geo",function(d){
        L.geoJSON(d).addTo(map);
    });
    map.on("zoom",function(){
        console.log(map.getBounds())
        $.ajax({url:"/geo",success:function(d){
            L.geoJSON(d).addTo(map);
            console.log("geo call success")
        }})
    })
	});

