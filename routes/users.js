var express = require('express')
var router = express.Router()

router.get ('/AllUsers', function(req, res, next){
	var results = [];
	// Grab data from http request
	var data = {text: req.body.text, complete: false};

	// Get a Postgres client from the connection pool

	res.send('respond with a resource');
});
module.exports = router;
