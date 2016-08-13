// Create an Express app
// https://expressjs.com/en/starter/hello-world.html

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// Set template engine to Jade
// http://jade-lang.com/
// https://expressjs.com/en/guide/using-template-engines.html

// Define controllers to handle routes

// Define static routes to serve static assets like images, styles, etc.
// https://expressjs.com/en/starter/static-files.html

// Define page routes to specify which URLs will be handled by which controllers

// Define API routes to serve up application data

// Define a catch-all 404 route
// https://expressjs.com/en/guide/routing.html

// Start your Express app up on port 3000

app.listen(3000, function() {
	console.log('GDI Node App listening on port 3000!');
});
