// controllers/files/files.js
'use strict';

var Joi = require('joi'),
    Fs = require('fs');


// HANDLERS FOR OUR API
// =============================================================================
exports.getFilesByDir = {  
    handler: function (request, reply) {		
		if (typeof request.params.dirname != 'undefined' && request.params.dirname) {
			var pattern = request.params.dirname;
			Fs.readdir(pattern, function (err, files)  {
  				if (err) {
					reply({status: 404, message: "No files found from directory = " + pattern, error: err }).code(404);
				}
				reply({"files" : files});
			});
		}
    },
    validate: {
    	params: {
            dirname: Joi.string().required().min(3).max(25)
        }
    },
    description: 'Get files by directory name.',
    notes: 'Build an endpoint that when called returns the list of files in a given directory. Success: 200. Failure: 500',
    tags: ['api']
}