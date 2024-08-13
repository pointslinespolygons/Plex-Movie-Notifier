# Plex-Movie-Notifier
A Google Apps Script to send weekly emails with new movies on Plex, including jokes and movie trailers

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Description

Plex Movie Notifier is a Google Apps Script that automates the process of sending weekly email notifications with a list of newly added movies to your Plex server. Each email includes a randomly selected joke related to movies and links to trailers for the newly added titles. This script is designed to make keeping track of your media library fun and easy.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/Plex-Movie-Notifier.git

2. Open Google Apps Script:
  Go to Google Apps Script and create a new project.

3. Copy the Code:
  Copy the code from the PlexNotifier.gs file in this repository and paste it into the script editor.

4. Set Up Triggers:
   Set up a time-based trigger to run the sendEmail() function once a week.

5. API Keys and Configuration:
  Obtain an API key from The Movie Database (TMDb) and add it to the script.
  Configure your Plex server URL and access token in the script.

##Usage

1. Run the Script:
  Once everything is set up, the script will automatically send a weekly email with the new movies added to your Plex server.

2. Modify Jokes:
   You can modify the array of jokes in the script to personalize the emails further.

3. View Emails:
   Check your inbox each week to see the latest movies added to your Plex server, along with a funny movie-related joke.

## Configuration:

  1. TMDb API Key: Replace the placeholder 'Add_Your_API_Key' in the script with your actual TMDb API key.
     
  2. Plex Server URL and Token: Update the Plex server URL and token in the getNewMoviesFromPlex function.

##Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

##License:
This project is licensed under the MIT License

##Acknowledgments:
The Movie Database (TMDb) for providing movie data and trailers.
Plex for making media management easy and enjoyable.
Chatgpt for helping to summarize and clean up the code. 

