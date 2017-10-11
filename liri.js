var theKeys = require("./keys.js");
var command = process.argv[2];
var fs = require("fs");

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
	var Spotify = require('node-spotify-api');
	var songArg = process.argv;
	var songTitle = "";

	if(!process.argv[3]){
		songTitle = "The Sign Ace of Base";
	}

	if(process.argv[2] === "do-what-it-says"){
		songTitle = "I Want it That Way";
	}

	for (var i = 3; i < songArg.length; i++){
		if (i > 3 && i < songArg.length){
			songTitle = songTitle + "+" + songArg[i];
		}else{
			songTitle += songArg[i];
		}
	}	

	var spotify = new Spotify({
	  id: theKeys.spotifyKeys.client_id,
	  secret: theKeys.spotifyKeys.client_secret
	});
	 
	spotify.search({ type: 'track', query: songTitle, limit: 1}, function(err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}
			var songInfo = data.tracks.items[0];
			console.log("Artist(s): " + songInfo.artists[0].name);
			console.log("Song Name: " + songInfo.name);
			console.log("Preview Link: " + songInfo.album.external_urls.spotify);
			console.log("Album: " + songInfo.album.name);
	});
}

function movieThis(){
	var request = require("request");
	var movieArg = process.argv;
	var movieTitle = "";

	if(!process.argv[3]){
		movieTitle = "Mr. Nobody";
	}

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
	fs.readFile("random.txt", "utf8", function(error,data){
		if (error){
			return console.log(error);
		}
		console.log(data);
		var array = data.split(",");
		if(array[0]==="spotify-this-song"){
			spotifySong();
		}
	});
}