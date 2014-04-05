#!/usr/bin/env node
"use strict";
var querystring = require("querystring"),
	fs = require("fs"),
	filename = "./index.html";

function start (resp, postData) {
	console.log("Request Handler 'Start' was called");

	resp.writeHead(200, {"Content-Type":"text/html"});
	fs.readFile(filename, function (err, data) {
		if (err) throw err;
		resp.write(data);
		resp.end();
		});
	}

function upload (resp, postData) {
	console.log("Request Handler 'Upload' was called");

	resp.writeHead(200, {"Content-Type":"text/plain"});
	resp.write("You've sent the text:\n\n " + querystring.parse(postData).text );
	resp.end();
}

function show (resp, postData) {
	console.log("Request handler 'show' was called");
	fs.readFile("/tmp/test.png", "binary", function (error, file) {
		if (error) {
			resp.writeHead(500, {"Content-type":"text/plain"});
			resp.write(error + "\n");
			resp.end();
		} else {
			resp.writeHead(200, {"Content-type":"image/png"});
			resp.write(file, "binary");
			resp.end();
		}
	});
}
exports.start=start;
exports.upload=upload;
exports.show = show;