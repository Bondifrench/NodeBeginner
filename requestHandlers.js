#!/usr/bin/env node
"use strict";
var fs = require("fs");

var filename = "./index.html";
var buf = fs.readFileSync(filename, "utf-8");

function start (resp) {
	console.log("Request Handler 'Start' was called");

	resp.writeHead(200, {"Content-Type":"text/html"});
	resp.write(buf);
	resp.end();
}
function upload (resp) {
	console.log("Request Handler 'Upload' was called");
	resp.writeHead(200, {"Content-Type":"text/plain"});
	resp.write("Hello Upload");
	resp.end();
}
exports.start=start;
exports.upload=upload;