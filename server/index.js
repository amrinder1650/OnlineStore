var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});