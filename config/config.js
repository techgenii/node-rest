// config.js
'use strict';

// setup configuration parameters for mongo database
module.exports = { 
    server: {
        web: {
            host: 'localhost',
            port: 8000
        },
        api: {
            host: 'localhost',
            port: 3000
        }
    },
    mongo: {
        host: '127.0.0.1',
        port: 27017,
        db: 'testapi',
        username: '',
        password: ''
    } 
}
