const fetch = require('node-fetch');

// Web scraper code
function Scraper() {
    // Info for constructing url

    // AccuWeather API key
    this.apiKey = `M9uCzaw7TbghnQ2tzRACS8xlYbtvWjsF`;

    // API endpoint for five-day forecast
    this.fiveDayURL = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    // Irving, TX
    this.locationKey = `340866`;
    this.locationStr = `Irving, TX`

    // Calls out to AccuWeather API and returns array of tweetable strings
    // for the next five days of weather.
    this.getFiveDayForecast = function() {
        // API call for five-day forecast
        const forecastURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.locationKey}?apikey=${this.apiKey}`;

        // Array to hold tweetable strings for next five days of forecast
        // This will be the return value of the function
        var tweetArr = [];

        const fiveDayStrs = async url => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.DailyForecasts)
                const fiveDayArray = json.DailyForecasts;
                for (i = 0; i < fiveDayArray.length; i++) {
                    const location = `${this.locationStr}`;
                    const forecastDate = `Forecast for ${new Date(fiveDayArray[i].Date).toString().split("07:")[0]}`;
                    const maxTemp = `High: ${fiveDayArray[i].Temperature.Maximum.Value}`;
                    const minTemp = `Low: ${fiveDayArray[i].Temperature.Minimum.Value}`;
                    const dayConds = `Day: ${fiveDayArray[i].Day.IconPhrase}`;
                    const nightConds = `Night: ${fiveDayArray[i].Night.IconPhrase}`;

                    var tweetStr = `${location}\n${forecastDate}\n${maxTemp}\n${minTemp}\n${dayConds}\n${nightConds}`

                    this.tweetArr[i] = tweetStr;
                }
            } catch (error) {
                console.log(error);
            }
        };

        fiveDayStrs(forecastURL);

        return tweetArr;
    };
}

module.exports = Scraper;