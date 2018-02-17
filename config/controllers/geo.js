var https = require('https');
var http = require('http');

var geo = function(bbox,zoom){
	this.bbox = bbox;
	this.zoom = zoom;
	
	this.geoserver = function(callback){
		var layer = "India:Country"
		if (this.zoom >5 && this.zoom<=8) {
			layer = 'India:State'

		}else if (this.zoom >8 && this.zoom<=10){
			// console.log("this")
			layer = 'India:District'
		} else if (this.zoom>10){
			layer = "India:Taluka"
		}
		var uri = "http://localhost:8080/geoserver/wfs?request=GetFeature&outputFormat=JSON&version=1.1.0&typeName="+layer;
		if (this.bbox.length!=0){
			uri+="&BBOX="+this.bbox+",EPSG:4326"
		}
		// console.log(uri)
		http.get(uri,function(res,error){
			var body ='';
			res.on('data',function(d){
				body+=d;
			});
			res.on('end',function(){
				var parsed =JSON.parse(body);
				// console.log(parsed)
				callback(parsed,null)
			});
			// res.on('error',)
		})
	}
}

module.exports=geo;