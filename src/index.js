var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  if (/\/[^.]*$/.test(req.url)) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, req.url));
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
