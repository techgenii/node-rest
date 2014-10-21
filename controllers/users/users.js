// controllers/users/users.js
'use strict';

var Database = require('../database'),
    User = require('../../models/user'),
    Helper = require('../../lib/helper'),
    Bcrypt = require('bcrypt'),
    Joi = require('joi');

// HANDLERS FOR OUR API
// =============================================================================

exports.baseRoute = {  
    handler: function (request, reply) {
        reply({message : 'Hello, world!'});
    }
}

exports.getUsers = {  
    handler: function (request, reply) {
		var findQuery = {};
    	if (Helper.isSet(request.query.state)) {
        	findQuery['state'] = request.query.state;
		}
		if (Helper.isSet(request.query.ageMoreThan)) {
			if (Helper.isUndefined(findQuery['age'])) {
        		findQuery['age'] = {};	
        	}
        	findQuery['age']['$gt'] = request.query.ageMoreThan;
		}
		if (Helper.isSet(request.query.ageLessThan)) {
		    if (Helper.isUndefined(findQuery['age'])) {
        		findQuery['age'] = {};	
        	}
        	findQuery['age']['$lt'] = request.query.ageLessThan;
		}
		User.paginate(findQuery, request.query.page, request.query.limit, 
			function(err, pageCount, paginatedResults, itemCount) {
  				if (err) {
					reply({status: 500, message: "User.paginate failed.", error: err }).code(500);
  				} else {
    				reply({results: paginatedResults, pages: pageCount, items: itemCount}).code(200);
  				}
			});
    },
    validate: {
        query: {
            limit: Joi.number().integer().min(1).max(100).default(15),
            page: Joi.number().integer().min(1).default(1),
            ageMoreThan: Joi.number().integer().min(5).max(100),
            ageLessThan: Joi.number().integer().min(5).max(100),
            state: Joi.string()
        }
    },
    description: 'Users filtered by age, group by state.',
    notes: 'Build an endpoint that returns all users in the database filtered by a URL parameter (age) and groups them by another parameter (state). Success: 200. Failure: 500.',
    tags: ['api']
}

exports.addUser = {  
    handler: function (request, reply) {
       // create a new instance of the user model
		var user = new User(), 		
		// Generate a salt
		    salt = Bcrypt.genSaltSync(10);
		
		// set the users information (comes from the request)  
		user.email = request.payload.email;
		// Hash the password with the salt
		user.password = Bcrypt.hashSync(request.payload.password, salt);
		
		if (Helper.isSet(request.payload.age)) {
    		user.age = request.payload.age;
		};
		if (Helper.isSet(request.payload.state)) {
    		user.state = request.payload.state;
		};    

		// save the user and check for errors
		user.save(function(err) {
			if (err) {
				reply({status: 500, message: "User.save failed.", error: err }).code(500);
			}
			reply(user).code(201);
		});
    },
    validate: {
    	payload: {
            email: Joi.string().required(),
            password: Joi.string().required(),
            age: Joi.number().integer().min(5).max(100),
            state: Joi.string()
        }
    }
}

exports.authUser = {  
    handler: function (request, reply) {
        // create a new instance of the user model
		var user = new User(),		
		// get the users information (comes from the request)  		
		    findQuery = { 'email' : request.payload.email };

		User.findOne(findQuery, function(err, user) {
			console.log("after findOne");
		    // not found
			if (err) {
				reply({status: 404, message: "User not found." + request.payload.email, error: err }).code(404);
		    }
		    if (!Helper.isSet(user)) {
		    	reply({status: 404, message: "User not found." + request.payload.email, error: err }).code(404);
		    }
		    if (Helper.isSet(request.payload.password)) {
    			// not authorized
		    	if (!Bcrypt.compareSync(request.payload.password, user.password)) {
		    		reply({status: 401, message: "Unauthorized. Invalid username or password." }).code(401);
		    	} 
		    	// found & authorized
				reply(user);
			}; 
		    // not authorized
		    reply({status: 401, message: "Unauthorized. Invalid username or password." }).code(401);
   		});
    },
    validate: {
    	payload: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    },
    description: 'Authenticate a user.',
    notes: 'Build an endpoint that authenticates a user based on a login/password passed in a JSON payload and verifies against a simple data structure (Mongo). Success: 200. Failure: 401 or 404.',
    tags: ['api']
}