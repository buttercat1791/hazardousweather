const fetch = require('node-fetch');

// Web scraper code
function Scraper() {
    this.apiKey = `M9uCzaw7TbghnQ2tzRACS8xlYbtvWjsF`;
    this.locationURL = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    this.locationKey = `340866`;

    this.getString = function() {
        const forecastURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.locationKey}?apikey=${this.apiKey}`;

        const getForecast = async url => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(JSON.stringify(json));
              // TODO: Parse data into Tweetable forecast string
          } catch (error) {
              console.log(error);
          }
        };

        getForecast(forecastURL);
    };
}

module.exports = Scraper;