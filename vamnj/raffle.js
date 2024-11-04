function updateTotal() {
    const totalField = document.getElementById('totalField');
    const ticketCount = document.querySelector('input[name="ticketCount"]');
    const ticketCost = 100;
    
    totalField.value = `$${Number(ticketCount.value) * ticketCost}`;    // Convert the value to a number to ensure proper handling.
}

function toggleCreditCardFields() {
    const creditCardFields = document.getElementById('creditCardFields');
    const isCreditSelected = document.querySelector('input[name="paymentMethod"]:checked').value === "credit";
    creditCardFields.style.display = isCreditSelected ? 'block' : 'none';
}

function submitForm() {
    document.getElementById('thankYouMessage').style.display = 'block';
}

function resetForm() {
    document.getElementById('raffleForm').reset();
    updateTotal(); // Reset the total
    document.getElementById('thankYouMessage').style.display = 'none';
    toggleCreditCardFields(); // Reset credit card field visibility
}

// Initial setup to show credit card fields if "Credit card" is default
toggleCreditCardFields();
