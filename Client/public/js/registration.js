// registration JS
const regForm = document.reg_form;

//check teh passwords are the same
function checkPasswords(){
    const newpassword= document.getElementById("newPass").value;
    const checkpassword=document.getElementById("confirmPass").value;
    if(newpassword==checkpassword){
        password=newpassword;
        return password; 
    }
    else{
        alert("Passwords do not match");
    };
}

// Submit event handler
regForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        email: document.getElementById('email').value,
        DOB: document.getElementById('DOB').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        password: document.getElementById('newPass').value,
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value
    };

    const jsonData = JSON.stringify(formData); // Convert to JSON

    // This submits the data to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('Server response:', data);
            // Handle successful submission (e.g., display a success message)
            window.location.href = '/login';
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Handle errors (e.g., display an error message)
        });
});





// make array so it is accessable to registration 
var profileArray=[
    // test data
    {"fname":"das", "lname":"person", "DOB":"10-04-13","pnumber":"8452142375", "email":"g@gmail.com", "password":"123m"}
];

 //function to add the elements from registration to the array
 function storeInfo() {
    //get the input elemetns
    const firstname = document.getElementById("firstName");
    const lastname = document.getElementById("lastName");
    const dob = document.getElementById("DOB");
    const pnumber = document.getElementById("phoneNumber");
    const email = document.getElementById("email");
    const password = document.getElementById("newPass");

    //get the values of the input elemetns
    const firstNameVal = firstname.value;
    const lastNameVal = lastname.value;
    const birthdayVal = dob.value;
    const phoneVal = pnumber.value;
    const mailVal = email.value;
    const passVal = password.value;

    //add the values to teh array
    profileArray.push({"fname":firstNameVal, "lname":lastNameVal, "DOB":birthdayVal,"pnumber":phoneVal, "email":mailVal, "password":passVal});
    console.log(profileArray);
}


//Idk if this is meant for the actual data but it's
//redundant with it's current code

function clear(){
    const clear=document.getElementById('reset');
    const form=document.getElementById('regs')
    clear.addEventListener('click',()=>{
        form.clear();
})}

clear();


storeInfo();
checkPasswords();