// var L 	= require('leaflet')

$(document).ready(function () {
    var map = L.map( 'map-canvas', {zoomControl:false, center: [21.99, 77.99], zoom: 5 } );
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // console.log(map)
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
        var bounds = map.getBounds();
        // console.log(bounds);
        var bbox =bounds._southWest.lng+","+bounds._southWest.lat+","+bounds._northEast.lng+","+bounds._northEast.lat
        var zoom = map.getZoom();
        // console.log(bbox)
        map.eachLayer(function(layer){
            // console.log(layer);
            if (layer.hasOwnProperty('feature')){
                layer.remove();
                console.log("layer removed");
            }
            // layer.remove();
        })

        $.getJSON("/geo",{BBOX:bbox,zoom:zoom},function(d){
            // console.log("jsons")
            L.geoJSON(d).addTo(map);
            // console.log("geo call success")
        })
    })
	});

