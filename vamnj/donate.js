function updateTotal() {
    const totalField = document.getElementById('totalField');
    const selectedOption = document.querySelector('input[name="options"]:checked');

    // Update total
    if (selectedOption) {
        totalField.value = `$${selectedOption.value}`;
    } else {
        totalField.value = "$0";
    }
    
    document.getElementById('customDonationBox').style.display = 'none';
}

function showCustomDonationBox() {
    document.getElementById('customDonationBox').style.display = 'flex';
}

function addCustom() {
    const totalField = document.getElementById('totalField');
    const customAmount = document.querySelector('input[name="donationAmount"]');
    
    totalField.value = `$${customAmount.value}`;
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
