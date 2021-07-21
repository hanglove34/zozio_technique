var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

var server = express();
server.use(cors())

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', apiRouter);

server.listen(8080, function() {
    console.log("server activate");
})