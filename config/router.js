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

	GEO.geoserver(function(json){
		res.send(json);

	})
})
module.exports = router;