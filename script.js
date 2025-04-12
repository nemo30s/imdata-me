
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('auditForm');
    const formSuccess = document.getElementById('formSuccess');
    const spinner = document.getElementById('submitSpinner');

    form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show spinner
    spinner.style.display = 'inline-block';

    // Collect form data
    const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    website: document.getElementById('website').value,
    message: document.getElementById('message').value
};

    // Simulate form submission with a delay
    setTimeout(function() {
    // Hide spinner
    spinner.style.display = 'none';

    // Log form data to console (in production, you'd send this to your server)
    console.log('Form submitted with data:', formData);

    // Hide form and show success message
    form.style.display = 'none';
    formSuccess.style.display = 'block';

    // You would typically send this data to your server using fetch or XMLHttpRequest
    // For example:
    /*
    fetch('https://yourserver.com/api/submit-audit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        form.style.display = 'none';
        formSuccess.style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
        spinner.style.display = 'none';
    });
    */

}, 1500); // Simulate network delay for 1.5 seconds
});
});
