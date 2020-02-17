const path = require('path')
const express = require('express')
var http = require('http');
const sockets = require('./sockets')

const app = express ();
const server = http.createServer(app);
sockets(server);

const staticPath = path.join(__dirname,'..', 'public');
app.use(express.static(staticPath));

PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});