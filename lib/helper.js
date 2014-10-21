// lib/helper.js
'use strict';

module.exports = {
	isSet: function(value) {
    	return (typeof value != 'undefined' && value) ? true : false;
	},
	
	isUndefined: function(value) {
    	return (typeof value == 'undefined') ? true : false;
	}    
};