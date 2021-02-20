/*
 
 This API get is a song finder

*/
// var request = require('request');
// var options = {
//   'method': 'GET',
//   'url': 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Yellow',
//   'headers': {
//     'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d',
//     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//     '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d': 'True'
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });
const { builtinModules } = require('module');
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Yellow',
  'headers': {
    'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d': 'True'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
}) ;
// var https = require('follow-redirects').https;
// var fs = require('fs');

// var options = {
//   'method': 'GET',
//   'hostname': 'deezerdevs-deezer.p.rapidapi.com',
//   'path': '/search?q=Yellow',
//   'headers': {
//     'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d',
//     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//     '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d': 'True'
//   },
//   'maxRedirects': 20
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// req.end();
// const music = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "",
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
// 	}
// };
// $.ajax(music).done(function (response) {
// 	console.log(response);
// });


// /*

// This API get is for food receipes

// */

// function spoonApiCall() {
//   let api_Key = "";
//   let endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_Key}&includeIngredients=${ingredients}`;

//   $.ajax({
//     url: endpoint,
//     method: "GET",
//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//       alert(
//         "Sorry, but this search generated an error.  Please try again! " +
//           "\n Details: Status =" +
//           XMLHttpRequest.status +
//           ", Status Text: " +
//           XMLHttpRequest.statusText
//       );
//       housekeeping();
//       return;
//     },
//   }).then(function (response) {
//     JSON.stringify.response;
//     console.log("JSON Spoontacular Payload: " + response);
//     spoonLength = response.results.length;
//     displayResults(response, spoonLength);
//   });
//   console.log("Length of JSON-returned list " + spoonLength);
// }

// /*
  
//  This api is to get local area resturants

//  */

// const restaurants = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://documenu.p.rapidapi.com/restaurants/zip_code/6824?size=30&cuisine=Italian&fullmenu=true&top_cuisines=true&page=2",
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "71b5bfaf79305a51800a453a79324cf8",
// 		"x-rapidapi-key": "588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d",
// 		"x-rapidapi-host": "documenu.p.rapidapi.com"
// 	}
// };
// $.ajax(restaurants).done(function (response) {
// 	console.log(response);
// });


// /*
 
//  This api is to get weather forecast

//  */

// const weather = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d",
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// };
// $.ajax(weather).done(function (response) {
// 	console.log(response);
// });
module.exports = (app) => {
	request(options, function (error, response) {
	if (error) throw new Error(error);
	console.log(response.body);
	});
}