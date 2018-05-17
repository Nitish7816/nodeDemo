var http= require('http');
var dt= require('./date');
http.createServer(function (req, res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write('the date and time currently '+dt.myDateTime());
    res.end();
}).listen(8080);
