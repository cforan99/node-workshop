// Create an Express app
// https://expressjs.com/en/starter/hello-world.html

var express = require('express');
var app = express();

// Set template engine to Jade
// http://jade-lang.com/
// https://expressjs.com/en/guide/using-template-engines.html

var jade = require('jade');
app.set('view engine', 'jade');
app.set('views', './views');

// Define controllers to handle routes

var homeCtrl = require('./controllers/homeCtrl.js');
var apiCtrl = require('./controllers/apiCtrl.js');

// Define static routes to serve static assets like images, styles, etc.
// https://expressjs.com/en/starter/static-files.html

app.use(express.static('public'));
app.use(express.static('node_modules'));

// Define page routes to specify which URLs will be handled by which controllers

app.get('/', homeCtrl.home);
app.get('/about', homeCtrl.about);

// Define API routes to serve up application data

app.get('/api/dinosaurs', apiCtrl.dinosaurs);

// Define a catch-all 404 route
// https://expressjs.com/en/guide/routing.html

app.get('/*', homeCtrl.noRoute);

// Start your Express app up on port 3000

app.listen(3000, function() {
	console.log('GDI Node App listening on port 3000!\n');
});
