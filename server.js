require('newrelic');
const express = require('express');
const compress = require('compression');
const proxy = require('http-proxy-middleware');

const port = 8000;

const app = express();

app.use(
  '/api/photos',
  proxy({
    target: 'http://localhost:8888',
    changeOrigin: true
  })
);

app.use(compress());
app.use(express.static(__dirname + '/public'));

app.use('/:id', express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('Listening on port', port);
});
