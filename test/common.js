'use strict';

var Chai = require('chai'),
    Superagent = require('superagent'),
    Config = require('../config/config');

global.expect = Chai.expect;
global.superagent = Superagent;
global.config = Config;
