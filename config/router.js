var express = require('express');
var router = express.Router();
var geo = require('./controllers/geo')

/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log("router")
  res.render('index', { title: 'Express' });
});

router.get('/geo',function(req,res,next){
	GEO = new(geo);
	console.log(GEO.geoserver())
	// GEO.get_geoserver()
	res.send("geo success")
})
module.exports = router;