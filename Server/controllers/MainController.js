/*
MainController MAY (not certain by end product) as a controller handling 
the APIData model. 
*/

// import module
const express=require('express');

// Set up app
const app = express();

// Getting models (may or may not be used in the end)
var data = require('../models/APIData');
var account = require('../models/Account');

