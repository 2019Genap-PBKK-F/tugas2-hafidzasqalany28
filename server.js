const http = require("http");
const hostname = '10.199.14.46';
const port = 8029;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hafidz Firman Asqalany\n');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});