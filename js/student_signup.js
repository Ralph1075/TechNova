document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('studentSignupForm'); 

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (isValidSignup(username, email, password)) {
            displayFeedback('Signup successful! Redirecting to login...', 'success');
            // Redirect to the login page after a short delay
            setTimeout(() => {
                navigateTo('/login.html');
            }, 2000);
        } else {
            displayFeedback('Signup failed. Please check your information and try again.', 'error');
        }
    });
});

function isValidSignup(username, email, password) {
    return true;
}

function displayFeedback(message, type) {
    const feedbackElement = document.createElement('div');
    feedbackElement.className = `feedback ${type}`;
    feedbackElement.textContent = message;

    document.body.appendChild(feedbackElement);

    setTimeout(() => {
        document.body.removeChild(feedbackElement);
    }, 3000);
}

function navigateTo(page) {
    window.location.href = page;
}
