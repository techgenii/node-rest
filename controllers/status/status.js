// controllers/status/status.js
'use strict';

var Helper = require('../../lib/helper'),
    Database = require('../database');
  
// HANDLERS FOR OUR API
// =============================================================================
exports.getSystemStatus = {  
    handler: function (request, reply) {
        var mongoStates = ["disconnected", "connected", "connecting", "disconnecting"];
        var mongoStatus = 0;
        if (Helper.isSet(Database.db.readyState)) {
        	mongoStatus = Database.db.readyState; 
        }
		reply({status : { mongo : mongoStates[mongoStatus]} });
    },
    description: 'Get system status.',
    notes: 'Build an endpoint that checks and returns the status of all components that it depends on (e.g. Is Mongo still up OK, etc.). Success: 200. Failure: 500.',
    tags: ['api']
}