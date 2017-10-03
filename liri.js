var theKeys = require("./keys.js");

console.log("Hello there!");

var command = process.argv[2];




if (command === "my-tweets"){
	var queryURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2"

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response);
	})
	console.log("My tweets are here!");


// //show last 20 tweets and when they were created in terminal
 }
 //else if(command === "spotify-this-song"){
// 	//show artist(s), song's name, preview of link to the song from spotify, and album that song is from
// }




// "movie-this"

// "do-what-it-says"