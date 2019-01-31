var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile('index.html');
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
