function updateTotal() {
    const totalField = document.getElementById('totalField');
    const selectedOption = document.querySelector('input[name="options"]:checked');
    const recurringCheckbox = document.getElementById('recurringCheckbox');
    const paymentSection = document.getElementById('paymentSection');

    // Show/hide recurring checkbox and payment section, and update total.
    document.getElementById('recurringOption').style.display = selectedOption ? 'block' : 'none';
    if (selectedOption.id === 'member') {
        paymentSection.style.display = 'block';
        totalField.value = recurringCheckbox.checked ? "$35 / year" : "$50 for the year";
    } else {
        paymentSection.style.display = 'none';
        totalField.value = "$0";
    }
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
    document.getElementById('membershipForm').reset();
    updateTotal(); // Reset the total
    document.getElementById('thankYouMessage').style.display = 'none';
    document.getElementById('recurringOption').style.display = 'none';
    toggleCreditCardFields(); // Reset credit card field visibility
}

// Initial setup to show credit card fields if "Credit card" is default
toggleCreditCardFields();
