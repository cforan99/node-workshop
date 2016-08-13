// fs module: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
// path module: https://nodejs.org/api/path.html#path_path_join_path

var fs = require('fs');

exports.dinosaurs = function (req, res){

	fs.readFile('database/dinosaurs.json', 'utf-8', (err, data) => {
	  if (err) throw err;
	  res.send(data);
	});
}