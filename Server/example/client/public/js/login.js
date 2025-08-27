const loginForm = document.login_form;

// Submit event handler
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    const jsonData = JSON.stringify(formData); // Convert to JSON

    // This submits the data to the server
    fetch('/login', {
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
            if (data.success) {
                window.location.href = '/profile'; // Redirect to home page
            } else {
                alert(data.message); // Display error message
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Handle errors (e.g., display an error message)
        });
});