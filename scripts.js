// AUTO-ACTIVATE HOVER EFFECTS WHEN ON MOBILE (SINGLE-COLUMN BUTTON GRID).
document.addEventListener('DOMContentLoaded', () => {
    function isElementNearCenter(element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;

        // Check if the element's center is within a threshold of the viewport's center
        return Math.abs(elementCenter - viewportCenter) < rect.height / 2;
    }

    function checkButtonPositions() {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.grid-button').forEach(button => {
                if (isElementNearCenter(button)) {
                    button.classList.add('hover-active');
                } else {
                    button.classList.remove('hover-active');
                }
            });
        } else {
            document.querySelectorAll('.grid-button').forEach(button => {
                button.classList.remove('hover-active');
            });
        }
    }

    // Initial check
    checkButtonPositions();

    // Recheck on scroll and resize
    window.addEventListener('scroll', checkButtonPositions);
    window.addEventListener('resize', checkButtonPositions);
});

// HANDLE PROJECT BUTTON CLICK.
document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior

        // Add a class to the button grid to trigger the fade-out
        const buttonGrid = document.querySelector('.button-grid');
        buttonGrid.classList.add('fade-out');

        // Show the back button after the grid fades out
        const backButton = document.querySelector('.back-button');
        setTimeout(() => {
            backButton.style.display = 'block';
            backButton.style.opacity = 1; // Optional: add a fade-in effect for the back button
        }, 500); // Match this delay with the grid's fade-out duration
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Reset the grid to be visible again
    const buttonGrid = document.querySelector('.button-grid');
    buttonGrid.classList.remove('fade-out');

    // Hide the back button
    this.style.display = 'none';
});