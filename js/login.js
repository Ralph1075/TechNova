// login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Fetch input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (isValidUser(username, password)) {
            alert('Login successful! Redirecting...');
            // Redirect to the index page
            navigateTo('/index.html');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});

function isValidUser(username, password) {
    return (username === 'demo' && password === 'password');
}
