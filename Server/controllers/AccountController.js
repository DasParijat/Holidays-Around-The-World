/*
AccountController is the controller that handles 
the account model in relation to 
registration, logging in/out, and password encryption
*/

// import modules
const bcrypt = require('bcrypt')
const express = require('express');

// Get account model
const Account = require('../models/Account');

// Set up app
const app = express();

var loggedIn = true;


// encrypt our passwordssss
//req.body.password= bcrypt.hashSync(req.body.password, 10);

// we can now add people, yippee
async function addNewUser(req, res) {
    console.log('Received registration request:', req.body);
    let user = new Account(req.body);
    try {
        await user.save();
        res.status(201).json({ message: 'Registration successful' });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

// Function to authenticate a user
async function login(req, res) {
    console.log('Received login request:', req.body);
    // Find the user in the database
    let user = await Account
        .findOne({ email: req.body.email })
        .exec();
    // If the user is not found, return an error
    if (!user) {
        res.status(401).json({ message: 'Invalid username or password' });
        return;
    }
    // Compare the password with the stored hash
    if (bcrypt.compareSync(req.body.password, user.password)) {
        // If the password matches, set the session
        req.session.user = user;
        console.log('User logged in:', user);
        res.json({ success: true });
        return loggedIn = true
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
}


module.exports = {
    addNewUser,
    login
};