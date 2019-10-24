// Dependencies
// Requires twitter package, and gets info to create Twitter app from
// config files
var Twitter = require('twitter');
var trueConfig = require('./trueconfig.js');
var falseConfig = require('./falseconfig.js');
var Scraper = require('./scraper.js');
var Falsifier = require('./falsifier.js');

// Create the Twitter app objects
var TrueBot = new Twitter(trueConfig);
var FalseBot = new Twitter(falseConfig);

// Create objects to generate status update content
var Truther = new Scraper();
var Faker = new Falsifier();

// This value could be determined by a command line argument in the
// future.
// Value should be 12 for a 12-hour forecast, and 5 for a five-day
// forecast.
var forecastType = 12;

// The callback waits for Truther to fetch and prepare API data
Truther.getForecast(forecastType, function(tweets) {
    Faker.setInput(tweets);

    TrueBot.post('statuses/update', { status: tweets[0] }, function(err, response) {
        if(err) {
            console.log(err[0].message);
        } else {
          
        }
    });
    
    FalseBot.post('statuses/update', { status: tweets[0] }, function(err, response) {
        if(err) {
            console.log(err[0].message);
        } else {
        }
    });
});

// Post a status update


