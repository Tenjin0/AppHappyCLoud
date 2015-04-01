var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || "postgres://Patrice:patman00@localhost:5432/HappyCloud";
router.post ('/AllUsers', function(req, res, next){
	var results = [];
	// Grab data from http request
	var data = {text: req.body.text, complete: false};

	    pg.connect(connectionString, function(err, client, done) {

        // SQL Query > Insert Data
        //client.query("INSERT INTO Organisation(text, complete) values($1, $2)", [data.text, data.complete]);

        // SQL Query > Select Data
        var query = client.query('SELECT * FROM "User"');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            client.end();
            return res.json(results);
            // done();
        });

        // Handle Errors
        if(err) {
          console.log(err);
        }
    });

});
module.exports = router;
