// This class takes true content scraped from web and uses it to
// produce false but believable content.

class Falsifier {

    constructor() {
        this.inputs = []; // Array of tweetable strings fed from Scraper
    }

    falsify(){
        // Falsify data
        //this.currentWeather = this.inputs[0];
        this.currentWeather = "Fake Weather";


        /*
        for(var i = 0; i <this.inputs; i++) {
            this.currentWeather;
        }
        
        
        for (var i = 0; i < twelveHourArray.length; i++) {
            // Build all the pieces
            const forecastTime = `Forecast for ${new Date(twelveHourArray[i].DateTime).toString().split("05:")[0]}`;
            const temp = `Temp: ${twelveHourArray[i].Temperature.Value}F`;
            const chanceOfRain = `Chance of rain: ${twelveHourArray[i].PrecipitationProbability}%`;
            const conditions = `Conditions: ${twelveHourArray[i].IconPhrase}`;

            // Put it all together
            var tweetStr = `${location}\n${forecastTime}\n${temp}\n${chanceOfRain}\n${conditions}`;
            tweets[i] = tweetStr;
        }
        */

        return this.currentWeather;
    }

    // Takes an array of tweets and saves them for other Falsifier methods
    // to use.
    setInput(tweets) {
        this.inputs = tweets;
    }

}

module.exports = Falsifier;