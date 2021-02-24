var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?Query=burger',
  headers: { 
    'X-RapidAPI-Key': '588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d', 
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com', 
    '1800b42b74cd42b688e40f416d0c69d9': 'True'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});