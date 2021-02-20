var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-gate2.movieglu.com/cinemaShowTimes/?cinema_id=10636&date=2021-02-21',
  headers: { 
    'api-version': 'v200', 
    'Authorization': 'Basic U0NIT18yOV9YWDpaalFGWFB3M2dtT0s=', 
    'client': 'SCHO_29', 
    'x-api-key': 'aPhjnCnhZlaBSIFOB3jwB7d910N2furE9HkCdLkQ', 
    'device-datetime': '2021-02-16T08:30:17.360Z', 
    'territory': 'XX', 
    'Geolocation': '-22.0;14.0', 
    'user_id': 'Brunobborges', 
    'app_version': '0.1', 
    'app_platform': 'Web', 
    'language': 'English'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
