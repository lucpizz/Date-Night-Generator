var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Yellow',
  headers: { 
    'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d', 
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com', 
    '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d': 'True'
  },
  data : data
};



module.exports = axios(config)