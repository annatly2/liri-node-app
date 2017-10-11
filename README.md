# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI has four commands (listed below):

   * `my-tweets`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`



   1. `node liri.js my-tweets`
   	This will show the last 20 tweets and when they were created.

   2. `node liri.js spotify-this-song '<song name here>'`
   	This will show information about the song you listed.

   3. `node liri.js movie-this '<movie name here>'`
   	This will show information about the movie you listed.

   4. `node liri.js do-what-it-says`
   	This will run the command for what is in the random.txt file. In this case, it will run "spotify-this-song" for "I Want it That Way".