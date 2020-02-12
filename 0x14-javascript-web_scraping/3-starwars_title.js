#!/usr/bin/node
// Get request for a specific star wars movie title
const request = require('request');
request(`http://swapi.co/api/films/${process.argv[2]}`, function (error, body) {
  error && console.log(error);
  console.log(JSON.parse(body).title);
});
