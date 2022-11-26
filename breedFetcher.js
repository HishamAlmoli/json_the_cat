const request = require('request');
// const url = `https://api.thecatapi.com/v1/breeds/search/?q=${process.argv[2]}`;
// request(url, (error, response, body) => {

//     console.log(`Error during requesting this url ${url}: ${error}`);
//     console.log(`StatusCode : ${response.statusCode}`);
//     console.log(`Body : ${body}`);
//     console.log(`_____________________`);
//     const data = JSON.parse(body);
//     console.log(data);
//     console.log(typeof data);
// });
const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
    if (error) {
        console.log(`Error during requesting this url ${url}: ${error}`);
        console.log(`StatusCode : ${response.statusCode}`);
        callback(error, null);
        return 0;
    }
    const data = JSON.parse(body);
    if (data.length > 0) {
        try {
            callback(null, data[0].description);
        } catch (error) {
            callback(error, null);
        }
    } else {
      callback(null, 'Body does not found');
      return 0;
    }
  });
};

module.exports = { fetchBreedDescription };