// models/users.js
'use strict';

var Mongoose = require('../controllers/database').Mongoose;
var Schema   = Mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

//create the Schema
var UserSchema   = new Schema({
	email: {type: String, required: true, unique: true, trim: true},
	password: {type: String, required: true},
	age: {type: Number, min: 5, max: 100},
	state: {type: String},
	dateCreated: {type: Date, default: Date.now }
});

UserSchema.plugin(mongoosePaginate);

//create the indexes
UserSchema.index({email: 1});
UserSchema.index({email: 1, dateCreated: -1});

//create the model
var User = Mongoose.model('User', UserSchema, 'Users');

module.exports = User;
