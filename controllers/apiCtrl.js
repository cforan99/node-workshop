// fs module: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
// path module: https://nodejs.org/api/path.html#path_path_join_path

var fs = require('fs');
var path = require('path');

var jsonPath = path.join(__dirname + '/../database/dinosaurs.json');

exports.dinosaurs = function (req, res){

	fs.readFile(jsonPath, 'utf-8', (err, data) => {
	  if (err) throw err;
	  res.send(JSON.parse(data));
	});
}

exports.addDinosaur = function (req, res){

	if (!req.body) return res.sendStatus(400);

	var newDino = req.body;

	fs.readFile(jsonPath, 'utf-8', function (err, data){
	  if (err) throw err;
	  var currentDinos = JSON.parse(data);
	  currentDinos.push(newDino);

	  fs. writeFile(jsonPath, JSON.stringify(currentDinos), function(err, info){
	  	if (err) throw err;
	  	res.send(currentDinos);
	  });
	});
}