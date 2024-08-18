let label; // Declare label outside to use it in both event listeners

document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent immediate navigation
        const contentId = this.getAttribute('data-content');
        const overlay = document.querySelector('.screen-overlay');
        label = this.querySelector('.label'); // Assign the label element
        const newContent = document.getElementById(contentId);
        const homeButton = document.querySelector('.home-button');

        // Fade in the black overlay
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = 'auto';

        // Show the label and fade it out
        label.style.opacity = 1;
        setTimeout(() => {
            label.style.opacity = 0;

            // After the label fades out, show the new content
            setTimeout(() => {
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

    // Hide content and return to original state
    newContent.forEach(content => {
        content.style.opacity = 0;
        setTimeout(() => {
            content.style.display = 'none';
        }, 500);
    });

    // Show the label
    if (label) {
        label.style.opacity = 1;
    }

    // Fade out the overlay
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';

    // Hide the home button
    homeButton.style.display = 'none';
});
