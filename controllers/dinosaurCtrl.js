// request module: https://www.npmjs.com/package/request
// Passing arguments to a template: http://expressjs.com/en/api.html#res.render

var request = require('request');

exports.all = function (req, res){
	request('http://localhost:3000/api/dinosaurs', function(err, response, body){
		if (!err && response.statusCode == 200) res.render('dinosaurs', {dinos : JSON.parse(body)});
	});
	
}