var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'documenu.p.rapidapi.com',
  'path': '/restaurants/zip_code/90210?zip_code=06824&fullmenu=True',
  'headers': {
    'x-api-key': '71b5bfaf79305a51800a453a79324cf8',
    'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d',
    'X-RapidAPI-Host': 'documenu.p.rapidapi.com'
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
