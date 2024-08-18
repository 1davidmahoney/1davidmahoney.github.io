document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent immediate navigation
        const contentId = this.getAttribute('data-content');
        const overlay = document.querySelector('.screen-overlay');
        const label = this.querySelector('.label'); // Assign the label element
        const newContent = document.getElementById(contentId);
        const homeButton = document.querySelector('.home-button');

        // Disable pointer events to prevent hover effects
        this.style.pointerEvents = 'none';

        // Fade in the black overlay
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = 'auto';

        // Show the label and fade it out
        label.style.opacity = 1;
        setTimeout(() => {
            label.style.opacity = 0;

            // After the label fades out, remove inline styles and show the new content
            setTimeout(() => {
                label.removeAttribute('style'); // Remove inline styles
                newContent.style.display = 'block';
                newContent.style.opacity = 1;
                homeButton.style.display = 'block';
            }, 500);
        }, 1000);
    });
});

document.querySelector('.home-button').addEventListener('click', function() {
    const overlay = document.querySelector('.screen-overlay');
    const newContent = document.querySelectorAll('.new-content');
    const homeButton = document.querySelector('.home-button');
    const buttons = document.querySelectorAll('.grid-button');

    // Hide content and return to original state
    newContent.forEach(content => {
        content.style.opacity = 0;
        setTimeout(() => {
            content.style.display = 'none';
        }, 500);
    });

    // Re-enable pointer events on all grid buttons
    buttons.forEach(button => {
        button.style.pointerEvents = 'auto';
    });

    // Fade out the overlay
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';

    // Hide the home button
    homeButton.style.display = 'none';
});
