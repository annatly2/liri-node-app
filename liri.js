var theKeys = require("./keys.js");
var command = process.argv[2];

switch (command){
	case "my-tweets":
		getTweets();
		break;

	case "spotify-this-song":
		spotifySong();
		break;

	case "movie-this":
		movieThis();
		break;

	case "do-what-it-says":
		doWhat();
		break;
}

function getTweets(){
		console.log("gonna get the tweets");

}

function spotifySong(){


}

function movieThis(){
	var request = require("request");
	var movieArg = process.argv;
	var movieTitle = "";

	for (var i = 3; i < movieArg.length; i++){
		if (i > 3 && i < movieArg.length){
			movieTitle = movieTitle + "+" + movieArg[i];
		}else{
			movieTitle += movieArg[i];
		}
	}	

	var theOMBDKey = theKeys.ombdKey.apiKey;
	var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey="+theOMBDKey;
	console.log(queryURL);

	request(queryURL, function(error, response, body){
		if(!error && response.statusCode === 200){
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("IMDB Rating: "+ JSON.parse(body).imdbRating);
			console.log("Rotten Tomatoes Rating: "+ JSON.parse(body).Ratings[1].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		}
	});
}

function doWhat(){

}
