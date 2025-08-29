/*
Account is the model for user data (retreived from registration),
that'll be stored, updated, and retrieved from the database
*/


// importing modules
const express=require('express');
const app = express();
const mongoose=require('mongoose');
var bcrypt=require('bcryptjs');

// Connect to MongoDB
// Command to start DB: sudo systemctl start mongod
// Command to check DB status: sudo systemctl status mongod
mongoose.connect('mongodb://localhost:27017/sampledatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection failed', err));


// User schema, has all the required data for user
const usersSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    DOB:{type:Date, required:true},
    phoneNumber:{type:Number, required:true, unique: true},
    email:{type:String, required:true, unique: true},
    password:{type:String, required:true}
});

// Before we save the user, we gonna run this
usersSchema.pre('save', async function(next){
    try{
        //generate a salt with complexity 10
        const salt=await bcrypt.genSalt(10);
        //now hash itttt with that salt
        const hashedPassword= await bcrypt.hash(this.password, salt);
        //then you gotta replace the plain text password with hashed one
        this.password=hashedPassword;
        next();
    }
    catch(error){
        next(error);
    }
});

const Account = mongoose.model('Account', usersSchema);

// for logging in
app.post('/login', async(req, res)=>{
    const {email,password}= req.body;
    const mail= user.find(u=>u.email === email);
    if(mail && await bcrypt.compare(password, mail.password, function(err, result){})){
        //const token =jwt.sign({email}, 'your-secret-key');
        //res.json({token});
    }
    else{
        res.status(401).json({message: 'we couldnt find your profile :( try again'})
    }
});


app.use(function(err, req, res, next){
    res.status(500);
    res.end(JSON.stringify(err));
});

module.exports=Account;