// Generated by CoffeeScript 1.9.0
(function() {
  var client, connectionString, pg;

  pg = require('pg');

  connectionString = process.env.DATABASE_URL || "postgres://Patrice:patman00@localhost:5432/HappyCloud";

  client = new pg.Client(connectionString);

  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM User', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
    });
    query.on('end', function() {
      return client.end();
    });
  });

}).call(this);