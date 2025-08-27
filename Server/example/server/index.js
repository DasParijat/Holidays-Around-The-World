const express = require('express');
const bodyParser = require('body-parser'); // This will let us parse the request body
const accounts = require('./controllers/accounts');
const port = 3000;

// Create the express app
const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use(express.static('client/public')); // For our static files

// Point root to registration.html
app.get('/', function (req, res) {
    res.sendFile('registration.html', {root: './client/views' })
    });

// Login page
app.get('/login', function (req, res) {
    res.sendFile('login.html', { root: './client/views' })
});

app.post('/register', (req, res) => {
    console.log('Received registration request:', req.body);
    // This is the response message sent back to the client
    res.json({ message: 'Registration successful' });
});

// Login route
app.post('/login', accounts.login);
// Registration route
app.post('/register', accounts.addNewUser);

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});

