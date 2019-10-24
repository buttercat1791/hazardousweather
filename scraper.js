const fetch = require('node-fetch');

// Web scraper code
class Scraper {
    
    constructor() {
        this.apiKey = `M9uCzaw7TbghnQ2tzRACS8xlYbtvWjsF`;

        // API endpoint for five-day forecast
        this.fiveDayURL = `http://dataservice.accuweather.com/locations/v1/cities/search`;
        
        // Irving, TX
        this.locationKey = `340866`;
        this.locationStr = `Irving, TX`;
    }

    // Builds an array of strings containing forecast information
    buildFiveDayStrings(fiveDayArray) {
        var tweets = [fiveDayArray.length];
        const location = `${this.locationStr}`;
        const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }

        for (var i = 0; i < fiveDayArray.length; i++) {
            // Build the string in chunks
            const forecastDate = `Forecast for ${new Date(fiveDayArray[i].Date).toLocaleDateString("en-US", dateOptions)}`;
            const maxTemp = `High: ${fiveDayArray[i].Temperature.Maximum.Value}F`;
            const minTemp = `Low: ${fiveDayArray[i].Temperature.Minimum.Value}F`;
            const dayConds = `Day: ${fiveDayArray[i].Day.IconPhrase}`;
            const nightConds = `Night: ${fiveDayArray[i].Night.IconPhrase}`;

            // Put it all together
            var tweetStr = `${location}\n${forecastDate}\n${maxTemp}\n${minTemp}\n${dayConds}\n${nightConds}`;
            tweets[i] = tweetStr;
        }
        
        return tweets;
    }

    // Builds an array of tweetable strings from the data for the
    // twelve-hour forecast.
    buildTwelveHourStrings(twelveHourArray) {
        var tweets = [];
        const location = this.locationStr;
        const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric' }

        for (var i = 0; i < twelveHourArray.length; i++) {
            // Build all the pieces
            const forecastTime = `Forecast for ${new Date(twelveHourArray[i].DateTime).toLocaleDateString("en-US", dateOptions)}`;
            const temp = `Temp: ${twelveHourArray[i].Temperature.Value}F`;
            const chanceOfRain = `Chance of rain: ${twelveHourArray[i].PrecipitationProbability}%`;
            const conditions = `Conditions: ${twelveHourArray[i].IconPhrase}`;

            // Put it all together
            var tweetStr = `${location}\n${forecastTime}\n${temp}\n${chanceOfRain}\n${conditions}`;
            tweets[i] = tweetStr;
        }

        return tweets;
    }

    // Takes an input type and determines which type of forecast to
    // retrieve.  Returns an array of tweetable strings.
    getForecast(type, callback) {
        // API endpoints for five day and twelve hour forecasts
        const fiveDayURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.locationKey}?apikey=${this.apiKey}`;
        const twelveHourURL = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${this.locationKey}?apikey=${this.apiKey}`;

        if (type === 5) {
            this.forecastStrs(type, fiveDayURL, function(tweets) {
                callback(tweets);
            });
        }

        if (type === 12) {
            this.forecastStrs(type, twelveHourURL, function(tweets) {
                callback(tweets);
            });
        }
    }

    // Retrieves data from the appropriate AccuWeather API endpoint,
    // sends it to a function which turns it into an array of strings,
    // then returns that array of strings.
    async forecastStrs (type, url, callback) {
        try {
            const response = await fetch(url);
            const json = await response.json();
            var jsonArray = [];
            var tweetArr = [];

            if (type === 5) {
                // Grab the DailyForecasts field in the JSON object
                jsonArray = json.DailyForecasts;
                tweetArr = this.buildFiveDayStrings(jsonArray);
            }
            if (type === 12) {
                // The data is just an array of JSON objects
                jsonArray = json;
                tweetArr = this.buildTwelveHourStrings(jsonArray);
            }

            callback(tweetArr);
        } catch(error) {
            console.log(error);
        }
    }

}

module.exports = Scraper;