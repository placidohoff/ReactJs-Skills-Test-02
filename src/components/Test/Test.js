var axios = require("axios");

var options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {term: 'hiphop', locale: 'en-US', offset: '0', limit: '5'},
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': '91d5132d64msh1357964e59cc5a9p1d6502jsn71f7db4aab38'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});