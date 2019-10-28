// This class takes true content scraped from web and uses it to
// produce false but believable content.

class Falsifier {

    constructor() {
        this.inputs = []; // Array of tweetable strings fed from Scraper
    }

    falsify(hour){
        // Falsify data

        //Get current weather, split forcast by line
        var currentWeatherArray = this.inputs[hour].split("\n");
        //var currentWeather = currentWeatherArray[0];

        
        // Get vars from their lines
        
        //var to match as number
        var n = /\d+/;

        //Grab temp
        var temp = parseInt(currentWeatherArray[2].match(n));

        //Grab Precipitation
        var prec = parseInt(currentWeatherArray[3].match(n));

        //Change temp by adding 50
        var temp = temp + 25;

        //Change prec by ...
        var prec = prec + 58;

        //update current weather
        currentWeatherArray[2] = "Temp: ".concat(temp).concat("F");
        currentWeatherArray[3] = "Chance of rain: ".concat(prec).concat("%");

        //var currentWeather = currentWeatherArray[0].concat("\n").concat(currentWeatherArray[1]).concat("\n").concat(currentWeatherArray[2]);
        var currentWeather = currentWeatherArray[0]

        for(var i = 1; i < currentWeatherArray.length; i++){
            currentWeather = currentWeather.concat("\n" + currentWeatherArray[i]);
        }

        return currentWeather;
    }

    // Takes an array of tweets and saves them for other Falsifier methods
    // to use.
    setInput(tweets) {
        this.inputs = tweets;
    }

}

module.exports = Falsifier;