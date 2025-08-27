/**
 * This file contains all the business logic to deal with user accounts
 */
const User = require('../models/User');
const bcrypt = require('bcrypt');

async function addNewUser(req, res) {
    console.log('Received registration request:', req.body);
    let user = new User(req.body); // Creates a new object
    try {
        await user.save(); // Saving the user to the database
        res.status(201).json({ message: 'Registration successful' }); // Sending a 201 status with the created user
      } catch (err) {
        res.status(400).send(err); // Sending a 400 status with the error if saving fails
      }
}

// Esport the function so we can use it in other files
module.exports = {
    addNewUser
};
