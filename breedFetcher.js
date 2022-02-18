const request = require('request');

let breedRequest = process.argv
breedRequest = breedRequest.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedRequest}`, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log(data[0].description);

  // console.log(typeof body); // Print the HTML for the Google homepage.
});

// Notes:
// --- GET
// --- /breeds/search
// --- Search for a Breed by using part of it’s name as the ‘q’ query parameter.
  // --- e.g ?q=sib to search for Siberian - https://api.thecatapi.com/v1/breeds/search?q=sib