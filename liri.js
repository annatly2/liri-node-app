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
		var twitter = require("twitter");

		var client = new twitter({
			consumer_key: theKeys.twitterKeys.consumer_key,
			consumer_secret: theKeys.twitterKeys.consumer_secret,
  			access_token_key: theKeys.twitterKeys.access_token_key,
  			access_token_secret: theKeys.twitterKeys.access_token_secret
		});

		var params = {screen_name: 'yaylove2code', count: 20};
		client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (error) 
			throw error;
		else{
			for(i = 0; i < tweets.length; i++){
				console.log(tweets[i].created_at);
				console.log(tweets[i].text);
			}
		}		
	});
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
			var bodyInfo = JSON.parse(body);

			console.log("Title: " + bodyInfo.Title);
			console.log("Year: " + bodyInfo.Year);
			console.log("IMDB Rating: "+ bodyInfo.imdbRating);
			console.log("Rotten Tomatoes Rating: "+ bodyInfo.Ratings[1].Value);
			console.log("Country: " + bodyInfo.Country);
			console.log("Language: " + bodyInfo.Language);
			console.log("Plot: " + bodyInfo.Plot);
			console.log("Actors: " + bodyInfo.Actors);
		}
	});
}

function doWhat(){

}
