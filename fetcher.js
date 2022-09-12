// import the request library
const request = require('request');
// import the fs library
const fs = require('fs');

// grab the first and second CML args from the user
const args = process.argv.slice(2);
const args1 = process.argv.slice(3);

// http request GET method
const fetcher = function()  {
  request(`${args}`, function(error, response, body) {
    const fetchedData = body;
    // write to requested data to file
    fs.writeFile(`${args1}`, fetchedData, err => {
      if (err) {
        console.error(err);
      }
      fs.stat(`${args1}`, (err, stats) => {
        console.log(`Downloaded ${stats["size"]} bytes and saved to ${args1}`);
      });
    });
  });
}
fetcher();

//Test url and file:

// http://www.example.edu/ // url
// ./index.html // path to save to 