var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    fs.readFile('demofile.html',function (err,data) {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
console.log('server started at 8080');
