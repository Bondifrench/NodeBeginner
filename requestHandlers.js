#!/usr/bin/env node
"use strict";
var querystring = require("querystring");
var fs = require("fs");

var filename = "./index.html";

function start (resp) {
	console.log("Request Handler 'Start' was called");

	resp.writeHead(200, {"Content-Type":"text/html"});
	fs.readFile(filename, "utf8", function (err, data) {
		if (err) throw err;
		resp.write(data);
		resp.end();
		});
	
	}
function upload (resp, postData) {
	console.log("Request Handler 'Upload' was called");
	resp.writeHead(200, {"Content-Type":"text/plain"});
	resp.write("You've sent:\n " + querystring.parse(postData).text );
	resp.end();
}
exports.start=start;
exports.upload=upload;