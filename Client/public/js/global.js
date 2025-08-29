// global JS
//const Account = require('../models/Account');
var loggedIn=false;
/* old prompt login code

login.addEventListener('click', function() {
    if (loggedIn) {
        alert("You have logged out");
        
        loggedIn = false;
        login.textContent = "Login";
    } else {
        prompt("Username: ");
        prompt("Password: ");

        // TODO check if username and password are correct

        loggedIn = true;
        login.textContent = "Logout";
    }
})
    */

//links all our headers to pages
function homeNavLink(){
    try {
        const home=document.getElementById("home");
    
        home.addEventListener('click',function(){
            window.location.href='/home';
        })
    } catch (error) {
        console.warn("id 'home' doesn't exist on this page")
    }
}

//links all our headers to pages
function registrationNavLink(){
    try {
        const reg=document.getElementById("reg");
            
        reg.addEventListener('click',function(){
            window.location.href='/registration';
        })
    } catch (error) {
        console.warn("id 'reg' doesn't exist on this page")
    }
}

//links all our headers to pages
function profileNavLink(){
    try {
        const prof=document.getElementById("prof");

        prof.addEventListener('click',function(){
            window.location.href='/profile';
        })
    } catch (error) {
        console.warn("id 'prof' doesn't exist on this page")
    }
    
}

//links all our headers to pages
function loginNavLink(){
    try {
        const log=document.getElementById("log");
    
        log.addEventListener('click',function(){
            window.location.href='/login';
        })

    } catch (error) {
        console.warn("id 'log' doesn't exist on this page")
    }
}

//changes text based on loggedin variable (bool)
function logNavChangeText() {
    const log =document.getElementById("log");
    
    if (loggedIn=true) {
        log.textContent = "LOG OUT";
    } else{
        log.textContent = "LOG IN";
    }
}

//varibale being weird :( take you to the home page but the loggedin var resets to false
function logState() {
    const button=document.getElementById("loginForm");
    button.addEventListener("submit",function(e){
        loggedIn = true;
        logNavChangeText();
        window.location.href="/home";
        e.preventDefault();
    });
}


logNavChangeText()

homeNavLink();
registrationNavLink(); 
profileNavLink(); 
loginNavLink();
//logState();