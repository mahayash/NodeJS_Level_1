var http = require("http");
var dateTime = require("./firstModule");

http.createServer(function(req, res) {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write("Hello world Current Date/Time is " + dateTime.myDateTime());
    res.write(req.url);
    res.end();
}).listen("8000");