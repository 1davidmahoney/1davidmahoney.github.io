// "Thank you" message without going to new page.
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = event.target;

    // Send the form data using Fetch API
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            form.style.display = 'none'; // Hide the form
            document.getElementById('thankYouMessage').style.display = 'block'; // Show the thank you message
        } else {
            alert('Failed to send the message. Please try again.');
        }
    }).catch(function(error) {
        alert('Failed to send the message. Please try again.');
    });
});
