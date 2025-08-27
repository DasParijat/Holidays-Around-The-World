// home JS
//this breaks it, idk why but it does cause of require. But we need teh db
//what do we do
//const { db } = require("../../../Server/models/Account");

const holidayList = document.getElementById("holidayList");
var numOfHolidays = 0;

// getting current date
const rawCurrentDate = new Date();
const dateHeader = document.getElementById('dateHeader');    
const currentDate = rawCurrentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
});

/* OLD API USAGE CODE

// For API
const currentYear = rawCurrentDate.toLocaleDateString('en-US', {
    year: 'numeric'
});
var countryCode = 'US'
*/

dateHeader.textContent = `Retrieving data from API...`; // loading message
updatesData(); // This here so it gets updated data when page loaded
window.setInterval(updatesData, 86400000);
// update every day
// 86400000 seconds in a day

// Get the data from the API
function updatesData() {
    fetch(`https://date.nager.at/api/v3/NextPublicHolidaysWorldwide`)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        populatePostList(data);
    })
    .catch(error => {
        console.log('ERROR: ' + error.message);
    });

}

// OLD API CALL
// https://date.nager.at/api/v3/PublicHolidays/${currentYear}/${countryCode}

function createPost(postData, dataIndex) {
    const post = document.createElement('li');
    post.className = "holidayPost";

    // turn info into a table
    // Date value is used to check the date (for devs)
    post.innerHTML = `
        <!--<strong>Date:</strong> ${postData[dataIndex].date} <br> -->

        <table id="holidayTable">
            <tr>
                <td colspan="2" class="holidayName">${postData[dataIndex].name}</td> 
            </tr>
            <tr>
                <td>Local Name</td>
                <td class="holidayLocalName">${postData[dataIndex].localName}</td>
            </tr>
            <tr>
                <td>Country Code</td>
                <td class="holidayCountry">${postData[dataIndex].countryCode}</td>
            </tr>
            <tr>
                <td>Date</td>
                <td class="holidayDate">${postData[dataIndex].date.slice(5)}</td>
                <!--slice used to remove year from date, viable only until year 9999-->
            </tr>
        </table>

        <br>
    `;

    return post;
}

async function populatePostList(postData) {
    
    /* OLD API USAGE CODE
    var rawHolidayDate;
    var holidayDate;
    */

    holidayList.replaceChildren();
    
    if (1 == 0) {
        postLength; // set it equal to user pref
    } else {
        postLength = postData.length;
    }
    for (let i = 0; i < postLength; i++) {
        /* OLD API USAGE CODE
        rawHolidayDate = new Date(postData[i].date); 
        rawHolidayDate.setDate(rawHolidayDate.getDate() + 1) // brute force way to fix prior issue of dates not matching
        holidayDate = rawHolidayDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });
        */

        holidayList.appendChild(createPost(postData, i));
        numOfHolidays++;

        /* OLD API USAGE CODE

        // Change comparison to != to see if it's displaying API data
        // Else, it might show nothing as the API won't have any holiday for today.
        if (holidayDate != currentDate) {
            holidayList.appendChild(createPost(postData, i));
            numOfHolidays++;
        }
        */
    }

    if (numOfHolidays == 0) {
        dateHeader.textContent = `Today is ${currentDate}, and according to our data there is no upcoming holidays.`;
    } else {
        dateHeader.textContent = `Today is ${currentDate}, and the upcoming holidays are...`;
    }
}


/* 
This is test data taken straight from Nager.Date API
Used to check the properties of JSON sent from API

[
    {
    "date": "2017-12-11",
    "localName": "FAKE HOLIDAY",
    "name": "FAKE HOLIDAY",
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
    "localName": "FAKEDATA2",
    "name": "FAKEDATA2",
    "countryCode": "AT",
    "fixed": true,
    "global": true,
    "counties": null,
    "launchYear": null,
    "types": [
       "Public"
    ]
 },
]; 
*/
