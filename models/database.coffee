pg = require('pg')
connectionString = process.env.DATABASE_URL || "postgres://Patrice:patman00@localhost:5432/HappyCloud"

client = new pg.Client(connectionString)
client.connect (err)->
	if err
		return console.error('could not connect to postgres', err)

	query = client.query 'SELECT * FROM "User"' ,(err, result)->
		if err
			return console.error 'error running query', err
		console.log result
		client.end()
