// Dependencies
// Requires twitter package, and gets info to create Twitter app from
// ./config.js
var Twitter = require('twitter');
var config = require('./config.js')

// Create the Twitter app object
var T = new Twitter(config);
