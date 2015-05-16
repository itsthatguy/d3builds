var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, '/dist');
app.use(express.static(staticPath));

app.listen(process.env.PORT, function() {
  console.log('listening');
});
