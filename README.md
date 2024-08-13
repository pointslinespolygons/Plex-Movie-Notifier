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

 
Writing a good README file is important because it helps others understand what your project is about, how to use it, and how they can contribute if they wish. Here are some key elements to consider when writing a README for your Google Apps Script project:

Key Elements of a Good README:
Project Title

A clear and concise title that reflects the purpose of your project.
Project Description

A brief description of what the project does, why it was created, and any key features.
Table of Contents (optional for larger projects)

If your README is long, include a table of contents with links to different sections.
Installation Instructions

Step-by-step instructions on how to set up the project. This could include cloning the repository, setting up the environment, and configuring any necessary API keys.
Usage

Instructions on how to use the project. Provide examples, screenshots, or code snippets to illustrate how it works.
Configuration

Information about any necessary configuration, such as setting up API keys, environment variables, or adjusting settings within the code.
Contributing (optional)

Guidelines for how others can contribute to the project, including code standards, pull request processes, and any other relevant details.
License

Include a license to inform users of how they can use or modify your project. You can use an open-source license like MIT, Apache, or GPL.
Acknowledgments (optional)

Mention any libraries, tools, or resources you used that you want to credit.
Contact Information (optional)

Provide your contact information if you’re open to feedback or questions.
Example README for Your Project:
markdown
Copy code
# Plex Movie Notifier

A Google Apps Script project that automatically sends weekly emails with a list of newly added movies to a Plex server, complete with jokes and movie trailers.

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

