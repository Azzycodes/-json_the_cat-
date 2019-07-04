
const request = require('request');
const searchURL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(searchURL + breedName, (error, request, body) => {
    if (error) {
      callback(error);
    } else { 
      data = JSON.parse(body)
      if (!body || !data || !data[0]) {
        callback( 'Sorry, we were unable to find the dog you requested, Please try again..',null);
      } else {
        callback(null, JSON.parse(body)[0].description);
      }
    }
  }
  );
};
  

module.exports = {fetchBreedDescription};

