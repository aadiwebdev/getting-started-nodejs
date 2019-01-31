var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="somecss.css">
	<title>MEMORY GANG</title>
</head>
<body>
<p class = "one" id = "ting">

</p>
<input type = "number" id = "myText" value = "0">
<button onclick="myFunction()">Print</button>
<script>
function myFunction(){
var numbers = "";
var x = document.getElementById("myText").value;
var i;
for(i=0;i<=x;i++){
	numbers += " " + i ;
}
numbers += "<br>";
document.getElementById("ting").innerHTML = numbers;
}
</script>
</body>
</html>");
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
