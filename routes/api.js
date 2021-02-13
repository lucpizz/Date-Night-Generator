const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
	console.log(response);
});
