function updateTotal() {
    const heritageCheckbox = document.getElementById('heritageCheckbox');
    const recurringCheckbox = document.getElementById('recurringCheckbox');
    const totalField = document.getElementById('totalField');
    const paymentSection = document.getElementById('paymentSection');

    // Show/hide recurring checkbox and payment section
    document.getElementById('recurringOption').style.display = heritageCheckbox.checked ? 'block' : 'none';
    paymentSection.style.display = heritageCheckbox.checked ? 'block' : 'none';

    // Update total
    if (heritageCheckbox.checked) {
        totalField.value = recurringCheckbox.checked ? "$35 / year" : "$50 for the year";
    } else {
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
    toggleCreditCardFields(); // Reset credit card field visibility
}

// Initial setup to show credit card fields if "Credit card" is default
toggleCreditCardFields();
