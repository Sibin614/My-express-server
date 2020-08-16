const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1> Hello World</h1>');
});

app.get('/contact', function (req, res) {
  res.send('<p>Contact me at sibinvarghese1@gmail.com</p>');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
