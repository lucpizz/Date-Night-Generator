var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'api-gate2.movieglu.com',
  'path': '/cinemaShowTimes/?cinema_id=10636&date=2021-02-21',
  'headers': {
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
  },
  'maxRedirects': 20
};



module.exports = (app) => {
    var req = https.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          console.log(body.toString());
        });
      
        res.on("error", function (error) {
          console.error(error);
        });
      });
      
      req.end();
}