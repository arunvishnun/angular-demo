var express = require('express');
var app = express();

app
	.use(express.static('./public'))
	.get('*', function(req, res) {
		res.sendfile('public/main.html');
	}).listen(3000);