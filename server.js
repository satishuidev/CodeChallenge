var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require("path");

app.use(express.static(__dirname + '/public'));

var file = __dirname + '/public/app/data/transactions.json';

app.get('*/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

app.listen(port, function() {
    console.log('Running the server on port url: http://localhost:' + port);
});
