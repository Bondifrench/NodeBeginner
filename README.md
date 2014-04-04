This repo tracks my first steps into Node.js.
I am following the step by step tutorial "The Node beginner book" from Manuel Kiessling
Please check-out his site: http://www.nodebeginner.org/

Please note: from the Chapter "Handling POST requests" on,
for clarity purposes, I have separated the view (contained in the file index.html) from the request handlers in requesthandlers.js using Node.js module "fs".
I used the function fs.readFileSync(filename, ["encoding"]) for rendering the html file.
Managed from version 5 and thanks to a few people on stackoverflow (http://stackoverflow.com/questions/22863170/node-js-from-fs-readfilesync-to-fs-readfile) to use the asynchronous version fs.readFile()