var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'community-open-weather-map.p.rapidapi.com',
  'path': '/weather?q=Hartford,Connecticut',
  'headers': {
    'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d',
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d': 'True'
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