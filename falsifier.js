// This class takes true content scraped from web and uses it to
// produce false but believable content.

class Falsifier {

    constructor() {
        this.high = "";
        this.low = "";
        this.precip = "";
        this.inputs = []; // Array of tweetable strings fed from Scraper
    }

    falsify(){
        // Falsify data
        precip = precip+1;
    }

    getString() {
        // Return as a string the contents of a status update.
        str = "Today will have a high of " & high & " and a low of " & low & " with a " % precip % "% of rain."
    }

    // Takes an array of tweets and saves them for other Falsifier methods
    // to use.
    setInput(tweets) {
        this.inputs = tweets;
    }

}

module.exports = Falsifier;