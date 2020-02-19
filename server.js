var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Hafidz Firman A");
});

server.listen(8029);

console.log("server running on http://localhost:8029");