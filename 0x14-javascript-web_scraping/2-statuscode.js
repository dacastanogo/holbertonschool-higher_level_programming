#!/usr/bin/node
// print the status code of a get request
const request = require('request');
request(process.argv[2], function (error, response) {
  error && console.log(error);
  response && console.log('code:', response.statusCode);
});
