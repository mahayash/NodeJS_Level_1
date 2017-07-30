var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile("./sample1.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });

    fs.appendFile("newFile.txt", " hello world ", function(err) {

        if (err) throw err;
        console.log("saved");

    });
}).listen("8001");