// Dependencies
// Requires twitter package, and gets info to create Twitter app from
// config files
var Twitter = require('twitter');
var trueConfig = require('./trueconfig.js');
var falseConfig = require('./falseconfig.js');

// Create the Twitter app objects
var TrueBot = new Twitter(trueConfig);
var FalseBot = new Twitter(falseConfig);

// Create objects to generate status update content
var TrueScraper = new Scraper();
var Faker = new Falsifier(TrueScraper.getString());

// Content of status update goes here as a string
var status = TrueScraper.getString()

// Post a status update
TApp.post('statuses/update', {status}, function(err, response) {
    if(err) {
        console.log(err[0].message);
    } else {

    }
})