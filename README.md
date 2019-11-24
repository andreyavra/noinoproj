# Noino
Noino is a react-redux based news website. Noino is hosted locally via 
an express server.

# Running the Server
ENSURE YOU HAVE NPM INSTALLED.

To set everything up, open two terminals, and navigate one of them to 
/noinoproj/, and one of them to /noinoproj/client/. If this is the 
first time you are running the server, run `npm install` in both 
terminals. 

After you have navigated to the directories, in the noinoproj terminal,
run `npm run start`, and do the same in the client terminal. The 
terminal will open your default brower at localhost:3000, displaying
the website.

# Features
Rather than loading articles from a directory one by one, and calling 
on them when the user puts in a corresponding link, the noino API 
abstacts this for the writers of the articles. The only thing that has
to be done to create an article is add one to the list called 
`articles` in `global_state.json`, found in /noinoproj/server/.

This makes the interface for writers of articles much easier. The pages
are also created dynamically when the server starts running based on 
the `global_state.json` file, abstracting and simplifying the process
of adding an article further. 

The website also uses react-redux to change elements on a page rather 
than making another http request with the server as soon as a 
redirecting element is clicked, insuring a fast and quality user 
experience. The log in and sign up features will soon be implemented,
which will load articles dynamically based on the tags of the articles
that the user visited previously
