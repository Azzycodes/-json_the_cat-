const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return 'Error:' + error;
  } else {
    return desc;
  }
});
