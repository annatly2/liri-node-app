# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.
Make sure to follow the steps below to find out what LIRI can do!

## To get started...

1. Clone this git repository. 

2.  Type `npm install` to install all the dependencies found on the package.json file.

3. Type `node liri.js` and one of the four commands below.


LIRI commands:

:bird:  `my-tweets`

:musical_note:  `spotify-this-song`

:movie_camera:  `movie-this`

:clipboard:  `do-what-it-says`


1. `node liri.js my-tweets`

:bird: This will show the last 20 tweets and when they were created.

2. `node liri.js spotify-this-song '<song name here>'`   

:musical_note:  This will show information about the song you listed.

3. `node liri.js movie-this '<movie name here>'` 

:movie_camera:  This will show information about the movie you listed.

4. `node liri.js do-what-it-says`

:clipboard:  This will run the command for what is in the random.txt file. In this case, it will run "spotify-this-song" for "I Want it That Way".