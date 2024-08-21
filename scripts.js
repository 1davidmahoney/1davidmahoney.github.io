// HANDLE PROJECT BUTTON CLICK
document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior

        // Get the project ID from the button's data attribute
        const projectId = this.getAttribute('data-project-id');

        // Change the subtitle in the header to be the name of the clicked button's label.
        const subtitle = document.querySelector('.subtitle');
        const labelText = this.querySelector('.label').textContent;
        subtitle.textContent = labelText;

        // Fade out the button grid and body content
        const buttonGrid = document.querySelector('.button-grid');
        const bodyContent = document.querySelector('.body-content');
        buttonGrid.style.opacity = '0';
        bodyContent.style.opacity = '0';
        buttonGrid.style.transition = 'opacity 0.5s ease';
        bodyContent.style.transition = 'opacity 0.5s ease';

        // Show the specific project content and back button after the fade-out completes
        setTimeout(() => {
            window.scrollTo(0, 0); // Scroll to the top of the page
            
            const navElement = document.querySelector('nav');
            const backButton = document.querySelector('.back-button');
            const pieceContent = document.getElementById(projectId + '-content'); // Select the unique content by ID

            // Clear the current contents of the nav (removes <ul> and <li>)
            navElement.innerHTML = '';

            // Move the back button into the nav element and display it
            navElement.appendChild(backButton);
            backButton.style.display = 'block';

            // Hide the body content and show the specific project content
            bodyContent.style.display = 'none';
            pieceContent.style.display = 'block';
            pieceContent.style.opacity = '1';
            pieceContent.style.transition = 'opacity 0.5s ease';
        }, 500); // Match the timeout with the fade-out duration
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Reset the subtitle to the original text
    const subtitle = document.querySelector('.subtitle');
    subtitle.textContent = "Creative Development Portfolio";

    // Fade the button grid back in and hide the project content
    const buttonGrid = document.querySelector('.button-grid');
    const bodyContent = document.querySelector('.body-content');
    buttonGrid.style.opacity = '1';
    bodyContent.style.display = 'block';
    bodyContent.style.opacity = '1';
    buttonGrid.style.transition = 'opacity 0.5s ease';
    bodyContent.style.transition = 'opacity 0.5s ease';

    // Hide all project content after the fade-in completes
    setTimeout(() => {
        const navElement = document.querySelector('nav');
        const pieceContents = document.querySelectorAll('.piece-content');

        // Hide all project-specific content
        pieceContents.forEach(content => {
            content.style.display = 'none';
        });

        // Restore the original nav contents (re-create the <ul> with <li>)
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
    }, 500); // Match the timeout with the fade-in duration
});

function adjustContentWrapperPadding() {
    const header = document.querySelector('header');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (header && contentWrapper) {
        const headerHeight = header.offsetHeight;
        contentWrapper.style.paddingTop = `${headerHeight}px`;
    }
}

// Run on page load
window.addEventListener('load', adjustContentWrapperPadding);

// Run on window resize
window.addEventListener('resize', adjustContentWrapperPadding);
