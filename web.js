var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

//var app = express.createServer(express.logger());
var app = express();
  
app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

app.use(express.static('/home/ubuntu/pickem'));


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
