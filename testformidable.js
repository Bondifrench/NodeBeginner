#!/usr/bin/env node
"use strict";

var formidable = require("formidable"),	http = require("http"),	util = require("util"), fs = require("fs");
var filename = "./index.html";

http.createServer(function (req, res) {
	if (req.url == "/upload" && req.method.toLowerCase() == "post") {
		var form = new formidable.IncomingForm();
		form.parse(req, function (error, fields, files) {
			res.writeHead(200, {"Content-Type":"text/plain"});
			res.write("Received upload:\n\n");
			res.end(util.inspect({fields : fields, files : files}));
		});
		return;
	}
	res.writeHead(200, {"Content-type": "text/html"});
	fs.readFile(filename,"utf8", function (err, data) {
		if (err) throw err;
		res.write(data);
		res.end();
	});
	
}).listen(8888);