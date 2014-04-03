#!/usr/bin/env node
"use strict";

function start () {
	console.log("Request Handler 'Start' was called");
}
function upload () {
	console.log("Request Handler 'Upload' was called");
}
exports.start=start;
exports.upload=upload;