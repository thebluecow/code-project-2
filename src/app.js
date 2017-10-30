'use strict';

let express = require('express');
let app = express();

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
	// same as { path: path }
	let path = req.path;
	res.locals.path = path;
	res.render('index');
});

app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});
