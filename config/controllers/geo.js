var https = require('https');
var http = require('http');

var geo = function(){
	
	this.geoserver = function(callback){
		var uri = 'http://localhost:8080/geoserver/wfs?request=GetFeature&outputFormat=JSON&version=1.1.0&typeName=India:Country';
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