/* index JS */

const exitLocation = '/home';

// function to make it click the text it goes to home page
function exitOnClick(){
    const fadeInText=document.querySelector('#fadeInText');
    
    fadeInText.addEventListener('click', function(){
        window.location.href = exitLocation;
})}

// function to click space bar to go to home page
function exitOnSpace(){
    document.addEventListener('keydown', function(event){
        if(event.key === ' '){
            window.location.href = exitLocation;
        }
})}
 
// run both so each can happen while not interfearing with each other
exitOnSpace();
exitOnClick();