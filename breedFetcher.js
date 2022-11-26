const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search/?q=${process.argv[2]}`;
request(url, (error, response, body) => {

    console.log(`Error during requesting this url ${url}: ${error}`);
    console.log(`StatusCode : ${response.statusCode}`);
    console.log(`Body : ${body}`);
    console.log(`_____________________`);
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
});