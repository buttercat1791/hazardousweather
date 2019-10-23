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

// Post a status update
TrueBot.post('statuses/update', {status}, function(err, response) {
    if(err) {
        console.log(err[0].message);
    } else {

    }
})

FalseBot.post('statuses/update', {status}, function(err, response) {
    if(err) {
        console.log(err[0].message);
    } else {

    }
})