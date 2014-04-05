#!/usr/bin/env node
"use strict";
var fs = require("fs"),
	formidable = require("formidable");
var filename = "./index.html";

function start (resp) {
	console.log("Request Handler 'Start' was called");
	fs.readFile(filename, function (err, data) {
		if (err) throw err;
		resp.writeHead(200, {"Content-Type":"text/html"});
		resp.write(data);
		resp.end();
		});
	}

function upload (resp, req) {
	console.log("Request Handler 'Upload' was called");
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(req, function (error, fields, files) {
		console.log("parsing done");
		/* Possible error on Windows systems: tried to rename to an already existing file */
		/* for the moment this solution doesn't work on Windows */
		fs.rename(files.upload.path, "/tmp/test.png", function (error) {
			if (error) {
				fs.unlink("/tmp/test.png");
				fs.rename(files.upload.path, "/tmp/test.png");
			}
		});
		resp.writeHead(200, {"Content-Type":"text/html"});
		resp.write("Received image:<br/>");
		resp.write("<img src=/show />");
		resp.end();
		});
}

function show (resp) {
	console.log("Request handler 'show' was called");
	fs.readFile("./tmp/test.png", "binary", function (error, file) {
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