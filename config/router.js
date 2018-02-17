var express = require('express');
var router = express.Router();
var geo = require('./controllers/geo')

/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log("router")
  res.render('index', { title: 'Express' });
});

router.get('/geo',function(req,res,next){
	// console.log("this")
	var bbox = req.param('BBOX') || '';
	var zoom = req.param('zoom') || '';
	// console.log("bbox:",bbox,"zoom",zoom)
	GEO = new geo(bbox,zoom);

	GEO.geoserver(function(json){
		res.send(json);

	})
})
module.exports = router;