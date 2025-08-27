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
    //res.send('your adventure begins');
});

app.get('/home', function(req,res){
    res.sendFile('home.html',{root:'./Client/views'});
    //res.send('found the home page, heck yea');
});

app.get('/registration', function(req,res){
    res.sendFile('registration.html',{root:'./Client/views'});
    //res.send('ooo gonna register to be a new user?');
});

app.get('/profile', function(req,res){
    
    res.sendFile('profile.html',{root:'./Client/views'});
    //res.send('wow look at all that info we got on you');
});

app.get('/login', function(req, res){
    res.sendFile('login.html', {root:'./Client/views' });
    //req.session.email=`${email}`;
    //res.send('You have logged in');
});

app.get('/logout', function(req,res){
    req.session.destroy();
    //res.send('You have logged out');
});

// Where are the API routes?

// just need to post the data to 
// the home page since we got it
/*app.get('/holidays', async (req, res) => {
    const apiUrl = `https://date.nager.at/api/v2/publicholidays/2024/US`; // Example: 2024 holidays for the US
    try {
        const data = await fetchData(apiUrl);
        res.json(data); 
    } catch (error) {
        res.status(500).send({ error: 'Failed to get holiday data', details: error });
    }
 });*/

//authentication
/*app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function(email, password, done){
        if(email==='email'&&password==='password'){
            return done(null, false,{id:1, email:'email'});
        } else{
            return done(null, false,{message: 'Incorrect credentials.' });
        }
    }
));

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id, done){
    done(null,{id:1, email:'email'});
});

app.get('/login',(req,res)=>{
    res.send(`<form action="/home" methods="post">
        <label>Email:</label>
        <input type="text" name="email"/>
        <label>Password:</label>
        <input type="password" name="password"/>
        <input type="submit" value="Log In"/></form>`);
});

app.post('/login',passport.authenticate('local',{
    successRedirect:'/home',
    failureRedirect:'/login'
}));*/

app.post('/register', accounts.addNewUser);

app.post('/login', accounts.login);

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});