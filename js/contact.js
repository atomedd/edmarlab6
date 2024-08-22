// Function to validate the form fields
function validateForm(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form elements
    const name = document.getElementById('contact_name').value;
    const email = document.getElementById('contact_email').value;
    const phone = document.getElementById('contact_phone').value;
    const message = document.getElementById('contact_message').value;

    // Regular expression for validating email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for validating phone (only numbers)
    const phonePattern = /^[0-9]+$/;

    // Validate Name
    if (name.length < 5) {
        alert('Name must be at least 5 characters long.');
        return false;
    }

    // Validate Email
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate Phone
    if (!phonePattern.test(phone)) {
        alert('Phone number must contain only numbers.');
        return false;
    }

    // Validate Message
    if (message.length < 5) {
        alert('Message must be at least 5 characters long.');
        return false;
    }

    // If all validations pass, submit the form
    document.querySelector('form').submit();
}

// Attach the validateForm function to the form's submit event
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', validateForm);
});
