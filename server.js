require('newrelic');
const express = require('express');
const compress = require('compression');
const proxy = require('http-proxy-middleware');

const port = 8000;

const app = express();

app.use(
  '/overview',
  proxy({
    target: 'http://ec2-18-191-110-131.us-east-2.compute.amazonaws.com:3000',
    changeOrigin: true
  })
);

app.use(
  '/api/photos',
  proxy({
    target: 'http://ec2-52-90-207-0.compute-1.amazonaws.com',
    changeOrigin: true
  })
);


app.use(
  '/api/menu',
  proxy({
    target: 'http://ec2-18-222-202-91.us-east-2.compute.amazonaws.com',
    changeOrigin: true
  })
);

  app.use(
    '/api/reserve',
    proxy({
      target: 'http://ec2-13-59-134-78.us-east-2.compute.amazonaws.com',
      changeOrigin: true
    })
  );


app.use(compress());
app.use(express.static(__dirname + '/public'));

app.use('/:id', express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('Listening on port', port);
});
