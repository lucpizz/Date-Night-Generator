var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://documenu.p.rapidapi.com/restaurants/zip_code/90210?zip_code=06824&fullmenu=True',
  headers: { 
    'x-api-key': '71b5bfaf79305a51800a453a79324cf8', 
    'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d', 
    'X-RapidAPI-Host': 'documenu.p.rapidapi.com'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});