var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Berlin","New York","San Francisco","Tokyo"]}

app.get('/', function(req, res){
    res.send("<h1>Hi friends</h1>");
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
