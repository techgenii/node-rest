// server.js
'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
// setup the configuration and routes we need
var Hapi = require('hapi'),
    Good = require('good'),
    Swagger = require('hapi-swagger/package'),
    Config = require('./config/config'),
    Routes = require('./routes/routes');

// initialize the server
var port = Config.server.api.port || 3000,
    host = Config.server.api.host || 'localhost';
var server = new Hapi.Server(host, port);

// REGISTER OUR ROUTES -------------------------------
server.route(Routes.endpoints);

// START THE SERVER
// =============================================================================
// setup swagger options & good options
var swaggerOptions = {
    basePath: 'http://' + host + ':' + port,
    apiVersion: Swagger.version
},
    goodOptions = {
};

// adds swagger self documentation plugin & good process monitor
server.pack.register([ 
    	{plugin: require('good'), options: goodOptions},
    	{plugin: require('hapi-swagger'), options: swaggerOptions}
    ], 
	function (err) {
    	if (err) {
        	console.log(['error'], 'plugin "hapi-swagger" load error: ' + err);
        	console.log(['error'], 'plugin "good" load error: ' + err);
        	return; // something bad happened loading the plugin(s) 
    	} else {
        	console.log(['start'], 'swagger interface loaded');
        	console.log(['start'], 'good interface loaded');
        	server.start(function () {
        		server.log('info', 'Server running at: ' + server.info.uri);
    		});
        }
	}
);
