// This class takes true content scraped from web and uses it to
// produce false but believable content.

class Falsifier {

    high = "";
    low = "";
    precip = "";

    constructor() {
        // Use the parameter (the content of the true bot's status
        // update) to produce false content.
        // UPDATE: call the scraper to produce false content.
    }

    falsify(){
        // Falsify data
        precip = precip+1;
    }



    getString() {
        // Return as a string the contents of a status update.
        str = "Today will have a high of " & high & " and a low of " & low & " with a " % precip % "% of rain."
    }

}

module.exports = Falsifier;