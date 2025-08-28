/*
index.js is the gateway for the whole site,
and has routes to each view in the client.
*/

// NodeJS start up
const express=require('express');
const bodyParser=require('body-parser');
const session=require('express-session');
const port=3000;

const app=express();
app.use(bodyParser.json());
app.use(express.static('Client/public'));

const accounts= require('./controllers/AccountController.js');

app.set('trust proxy',1);
app.set('view engine', 'ejs')

app.use(session(
    {   secret:'secret',
        resave: true,
        saveUninitialized: true,
        cookie:{secure:true}
    }
));

// routes for the pages
app.get('/', function(req,res){
    res.sendFile('index.html',{root:'./Client/views'});
});

app.get('/home', function(req,res){
    res.sendFile('home.html',{root:'./Client/views'});
});

app.get('/registration', function(req,res){
    res.sendFile('registration.html',{root:'./Client/views'});
});

app.get('/profile', function(req,res){
    
    res.sendFile('profile.html',{root:'./Client/views'});
});

app.get('/login', function(req, res){
    res.sendFile('login.html', {root:'./Client/views' });
});

app.get('/logout', function(req,res){
    req.session.destroy();
});

app.post('/register', accounts.addNewUser);

app.post('/login', accounts.login);

app.listen(port,()=>{
    console.log(`Webpage is running. Look at it on localhost:${port}`)
});