// HANDLE PROJECT BUTTON CLICK
document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior

        // Change the subtitle in the header to be the name of the clicked button's label.
        const subtitle = document.querySelector('.subtitle');
        const labelText = this.querySelector('.label').textContent;
        subtitle.textContent = labelText;

        // Replace nav contents with the back button
        const navElement = document.querySelector('nav');
        const backButton = document.querySelector('.back-button');

        // Clear the current contents of the nav (removes <ul> and <li>)
        navElement.innerHTML = '';
        
        // Move the back button into the nav element and display it
        navElement.appendChild(backButton);
        backButton.style.display = 'block';
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Reset the subtitle to the original text
    const subtitle = document.querySelector('.subtitle');
    subtitle.textContent = "Creative Development Portfolio";

    // Restore the original nav contents (re-create the <ul> with <li>)
    const navElement = document.querySelector('nav');
    navElement.innerHTML = `
        <ul>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    `;

    // Re-append the back button outside the nav element for future use
    const bodyElement = document.querySelector('body');
    bodyElement.appendChild(this);

    // Hide the back button
    this.style.display = 'none';
});

function adjustBodyPadding() {
    const header = document.querySelector('header');
    const bodyContent = document.querySelector('.body-content');
    
    if (header && bodyContent) {
        const headerHeight = header.offsetHeight;
        bodyContent.style.paddingTop = `${headerHeight}px`;
    }
}

// Run on page load
window.addEventListener('load', adjustBodyPadding);

// Run on window resize
window.addEventListener('resize', adjustBodyPadding);
