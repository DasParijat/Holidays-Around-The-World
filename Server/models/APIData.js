/*
APIData is the model for the holiday data from the API we're using
*/

// import modules
const express=require('express');
const https=require('https');

// Set up app & port #
const app=express();

//get teh api data from online
fetch('https://date.nager.at/api/v3/publicholidays/2022/US')
.then(function(response) {
   return response.json();
})
.then(function(data){
      const publicHolidays = response.data;
      publicHolidays.forEach(publicHoliday => {
      console.log(publicHoliday.date);
    });
});

  
app.use(express.static(path.join(__dirname, 'public')));

/*
// taken from home.js to test parsing data
// given by API

const testData = [
    {
    "date": "2017-10-24",
    "localName": "Neujahr",
    "name": "New Year's Day",
    "countryCode": "AT",
    "fixed": true,
    "global": true,
    "counties": null,
    "launchYear": 1967,
    "types": [
       "Public"
    ]
 },
 {
    "date": "2017-10-24",
    "localName": "Heilige Drei Könige",
    "name": "Epiphany",
    "countryCode": "AT",
    "fixed": true,
    "global": true,
    "counties": null,
    "launchYear": null,
    "types": [
       "Public"
    ]
 },
 {
    "date": "2017-10-24",
    "localName": "Ostermontag",
    "name": "Easter Monday",
    "countryCode": "AT",
    "fixed": false,
    "global": true,
    "counties": null,
    "launchYear": 1642,
    "types": [
       "Public"
    ]
 },
 {
    "date": "2017-05-01",
    "localName": "Staatsfeiertag",
    "name": "National Holiday",
    "countryCode": "AT",
    "fixed": true,
    "global": true,
    "counties": null,
    "launchYear": 1955,
    "types": [
       "Public"
    ]
 }
];
*/
