var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather?q=Hartford,Connecticut',
  headers: { 
    'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d', 
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com', 
    '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d': 'True'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
