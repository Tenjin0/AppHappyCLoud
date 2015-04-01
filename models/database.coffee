pg = require('pg')
connectionString = process.env.DATABASE_URL || "postgres://Patrice:patman00@localhost:5432/HappyCloud"

pg.connect connectionString, (err,client,done)->
	results = []
	query = client.query 'SELECT * FROM "User"'
	#query.on 'row',(row, result)->
		#console.log 'row', row , 'results : ',result
	#	result.addRow(row)
	query.on "end", (result)->
		console.log JSON.stringify(result.rows, null, "    ")
		client.end()
		done(results)


		# Stream results back one row at a time
	query.on 'row', (row,result)->
		#console.log row, result
		result.addRow(row)
		results.push(row)

        #After all data is returned, close connection and return results

        # Handle Errors
		if(err)
			console.log(err)

###
client = new pg.Client(connectionString)
client.connect (err)->
	if err
		return console.error('could not connect to postgres', err)

	query = client.query 'SELECT * FROM "User"' ,(err, result)->
		if err
			return console.error 'error running query', err
		console.log result
		client.end()
###
