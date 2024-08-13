// Array of jokes to be included in the email
var jokes = [
    "Speaking of movies, I know of a skeleton that would love to see the latest horror flick, but he just doesn’t have the guts for it.",
    // (Include the rest of your jokes here)
];

// Array of messages for when new movies are added
var messageWith = [
    "Here are the movies I've added this week to my flaky QNAP library!",
    // (Include the rest of your messages here)
];

// Message for when no new movies are added
var messageWithout = "No new movies have been added this week. There are still lots of movies to choose from. Click on the Open Plex button to find them.";

// Function to get a random message from messageWith array
function getRandomMessageWith() {
    var randomIndex = Math.floor(Math.random() * messageWith.length);
    return messageWith[randomIndex];
}

// Function to get a random joke from the jokes array
function getRandomJoke() {
    var randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Function to get the trailer URL for a specific movie title and year
function getTrailerUrlForMovie(movieTitle, movieYear) {
    var apiKey = 'Add_Your_API_Key';
    var baseUrl = 'https://api.themoviedb.org/3';
    var searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`;

    if (movieYear) {
        searchUrl += `&year=${movieYear}`;
    }

    try {
        var response = UrlFetchApp.fetch(searchUrl);
        var json = JSON.parse(response.getContentText());

        if (json.results.length > 0) {
            var movieId = json.results[0].id;
            var videosUrl = `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}`;
            response = UrlFetchApp.fetch(videosUrl);
            json = JSON.parse(response.getContentText());

            if (json.results.length > 0) {
                var trailer = json.results.find(video => video.type === "Trailer");
                if (trailer) {
                    return `https://www.youtube.com/watch?v=${trailer.key}`;
                }
            }
        }
    } catch (error) {
        Logger.log(`Error fetching trailer: ${error}`);
    }

    return null;
}

// Function to send the email with movie updates and a joke
function sendEmail() {
    var recipient = "Add_Your_Gmail";
    var bccRecipients = "Add_Your_Friends";
    var subject = "Plex Update: ";
    var moviesList = getNewMoviesFromPlex();
    var randomJoke = getRandomJoke();
    var messageContext = moviesList ? getRandomMessageWith() : messageWithout;

    if (moviesList) {
        subject += "New Movies Added This Week";
    } else {
        subject += "No New Movies This Week";
        moviesList = "";
    }

    var htmlTemplate = getHtmlTemplate();
    var modifiedHtmlTemplate = htmlTemplate
        .replace("{{MessageContext}}", messageContext)
        .replace("{{joke}}", randomJoke)
        .replace("{{moviesList}}", moviesList);

    GmailApp.sendEmail(recipient, subject, "", {
        bcc: bccRecipients,
        htmlBody: modifiedHtmlTemplate
    });
}

// Function to get a list of new movies from Plex server
function getNewMoviesFromPlex() {
    var url = "http://url for plex/library/sections/1/all";
    var token = "Your Token Here";
    var oneWeekAgo = new Date().getTime() - (7 * 24 * 60 * 60 * 1000);

    var headers = {
        "X-Plex-Token": token
    };

    var options = {
        "method": "get",
        "headers": headers
    };

    var moviesList = "<br>";

    try {
        var response = UrlFetchApp.fetch(url, options);
        var xmlResponse = response.getContentText();
        var doc = XmlService.parse(xmlResponse);
        var root = doc.getRootElement();
        var videos = getElementsByTagName(root, 'Video');

        videos.forEach(video => {
            var addedAt = parseInt(video.getAttribute('addedAt').getValue());
            if (addedAt * 1000 > oneWeekAgo) {
                var title = video.getAttribute('title').getValue();
                var year = video.getAttribute('year') ? video.getAttribute('year').getValue() : "N/A";
                var summary = video.getAttribute('summary').getValue();
                var thumbUrl = `The Plex Server Address${video.getAttribute('thumb').getValue()}?X-Plex-Token=${token}`;
                var trailerUrl = getTrailerUrlForMovie(title, year);

                moviesList += `
                    <h2><b>${title}</b> (${year})</h2>
                    ${trailerUrl ? `<a href="${trailerUrl}" target="_blank"><img src="${thumbUrl}" alt="${title}" style="max-width:450px; max-height:500px;"></a><br>` : `<img src="${thumbUrl}" alt="${title}" style="max-width:450px; max-height:500px;"><br>`}
                    ${trailerUrl ? "<span style='font-size: x-small;'>To see the trailer tap or click on the movie poster.</span><br><br>" : "<br><br>"}
                    ${summary}<br><br>`;
            }
        });

        return moviesList === "<br>" ? null : moviesList;

    } catch (error) {
        Logger.log("Error fetching and parsing data from Plex: " + error);
        return "Error fetching data from Plex";
    }
}

// Recursive function to get elements by tag name (used by getNewMoviesFromPlex)
function getElementsByTagName(element, tagName) {
    var elements = [];
    var children = element.getChildren();

    children.forEach(child => {
        if (child.getName() === tagName) {
            elements.push(child);
        }
        elements = elements.concat(getElementsByTagName(child, tagName));
    });

    return elements;
}

// Function to get the HTML template for the email
function getHtmlTemplate() {
    return `
<!doctype html>
<html>
  <!-- Your existing HTML template here -->
</html>
    `;
}
