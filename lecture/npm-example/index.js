var request = require('request');

request.get('https://en.wikipedia.org/wiki/Kitten', function(error, response, body) {
  console.log(body)
})

console.log("Hello World!")