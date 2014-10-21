// routes/routes.js
'use strict';

var UserApi = require('../controllers/users/users');
var FileApi = require('../controllers/files/files'); 
var StatusApi = require('../controllers/status/status'); 

// Contains the list of all routes, i.e. methods, paths and the config functions
// that take care of the actions
exports.endpoints = [
    { method: 'GET', path: '/', config: UserApi.baseRoute },
    { method: 'GET', path: '/users', config: UserApi.getUsers },
    { method: 'POST', path: '/addUser', config: UserApi.addUser },
    { method: 'POST', path: '/authUser', config: UserApi.authUser },
    { method: 'GET', path: '/files/{dirname}', config: FileApi.getFilesByDir },
    { method: 'POST', path: '/status', config: StatusApi.getSystemStatus }
]