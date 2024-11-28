// script.js
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous messages
    document.getElementById('success-message').classList.add('hidden');
    document.getElementById('error-message').classList.add('hidden');

    // Form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the fields
    if (name === '' || email === '' || message === '') {
        document.getElementById('error-message').classList.remove('hidden');
        document.getElementById('error-message').innerText = 'All fields are required!';
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById('error-message').classList.remove('hidden');
        document.getElementById('error-message').innerText = 'Please enter a valid email address.';
        return;
    }

    // Simulate successful submission
    document.getElementById('success-message').classList.remove('hidden');
    document.getElementById('success-message').innerText = 'Thank you for contacting us! We will get back to you soon.';
    
    // Reset the form
    document.getElementById('contact-form').reset();
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
