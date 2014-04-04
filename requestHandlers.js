#!/usr/bin/env node
"use strict";

var exec = require("child_process").exec;

function start (resp) {
	console.log("Request Handler 'Start' was called");
	exec("ls -lah", function (error, stdout, stderr) {
		resp.writeHead(200, {"Content-Type":"text/plain"});
		resp.write(stdout);
		resp.end();
	});
}
function upload (resp) {
	console.log("Request Handler 'Upload' was called");
	resp.writeHead(200, {"Content-Type":"text/plain"});
	resp.write("Hello Upload");
	resp.end();
}
exports.start=start;
exports.upload=upload;