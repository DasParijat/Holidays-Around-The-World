const regForm = document.reg_form;

// Submit event handler
regForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value
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