// profile JS
//again, require breaks out stuff
//const { db } = require("../../../Server/models/Account");

//get the area were gonna post the user info
const userInfo=document.getElementById("userInfo");

// get teh db
/*fetchUser();
//fetch users
function fetchUser(email){
    try{
        const user= Account.findOne({email: email});
        if(user){
            console.log(user);
            displayUserInfo(user)
            // return user;
        }
        else{
            console.log('could not find user');
            // return null;
        }
    }
    catch{
        console.error("couldn't fetch user")
    }
}
//display info from mongo
async function displayUserInfo(user) {
    const userInfo = document.getElementById('userInfo');
    userInfo.className = "UserListed";
    userInfo.replaceChildren();

    // turn info into a table
    userInfo.innerHTML = `

        <div id="UserInformation">
                <lable class="userName">Name: ${user[dataIndex].firstName} ${postData[dataIndex].lastName}</lable>
                <br>
                <lable class="userEmail">Email: ${user[dataIndex].email} </lable>
                <br>
                <lable class="userNumber">Phone Number: ${user[dataIndex].phoneNumber} </lable>
                <br>
                <lable class="userDOB">Date of Birth: ${user[dataIndex].DOB} </lable>
                <br>
        </div>
    `;

    return userInfo;
}*/


//store preferences
const pref=document.getElementById('pref');
pref.addEventListener('submit', (event)=>{
    const jsonData=JSON.stringify(pref);

    fetch('/registration',{
        method:'PATCH',
        headers:{
            'Content-Type':'appplication/json'
        },
        body: jsonData
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('server response:', data);
        window.location.href='/home';
    })
    .catch(error =>{
        console.error(error)
    });
});
/* update will not work
function Update(){
    db.user.updateOne({$set: {pref:`${pref}`}});
}*/
