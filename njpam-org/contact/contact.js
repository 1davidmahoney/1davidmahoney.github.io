function submitForm() {
    document.getElementById('thankYouMessage').style.display = 'block';
}

function resetForm() {
    document.getElementById('contactForm').reset();
    updateTotal(); // Reset the total
    document.getElementById('thankYouMessage').style.display = 'none';
    toggleCreditCardFields(); // Reset credit card field visibility
}
