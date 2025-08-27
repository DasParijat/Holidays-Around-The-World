/**
 * This file defines a User model for the application
 */
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sampledatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection failed', err));

// This is the schema for our user objects
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true }
});

// This is the model for our user objects
const User = mongoose.model('User', userSchema);

module.exports = User;