#!/usr/bin/node
// Computes the number of tasks completed by user id from
// jsonplaceholder.typicode.com API

const request = require('request');
const url = process.argv[2];

request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  const tasks = JSON.parse(body);
  const obj = {};
  for (const task of tasks) {
    if (task.completed === true) {
      if (obj[task.userId] === undefined) {
        obj[task.userId] = 1;
      } else {
        obj[task.userId]++;
      }
    }
  }
  console.log(obj);
});
