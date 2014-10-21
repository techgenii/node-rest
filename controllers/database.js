// controllers/database.js
'use strict';

var Mongoose = require('mongoose');  
var Config = require('../config/config');

// load database
var url = 'mongodb://' + Config.mongo.host + ':' + Config.mongo.port + '/' + Config.mongo.db;
try {
  Mongoose.connect(url);
  console.log('Trying to connect to database: ' + url);
} catch (err) {
  console.log('Mongoose database initialization failed ' , err.message);
}
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'Mongoose database connection error'));
db.once('open', function callback() {  
    console.log('Mongoose database connection succeeded: ' + url);
});
 
// When the connection is disconnected
db.on('disconnected', function () {
  console.log('Mongoose database connection disconnected: ' + url);
});
 
var gracefulExit = function() { 
  db.close(function () {
    console.log('Mongoose database connection disconnected through app termination: ' + url);
    process.exit(0);
  });
}
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

exports.Mongoose = Mongoose;  
exports.db = db;