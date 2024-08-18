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

document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior

        const grid = document.querySelector('.button-grid');
        const backButton = document.querySelector('.back-button');

        // Apply the zoom effect to the entire grid
        grid.classList.add('zoomed');

        // Fade out all buttons except the clicked one
        document.querySelectorAll('.grid-button').forEach(btn => {
            if (btn !== this) {
                btn.classList.add('faded');
            } else {
                // Move the clicked button to the top left and reset its state
                btn.classList.add('moved');
                btn.classList.remove('zoomed', 'faded');
            }
        });

        // Show the label as a title next to the image
        const label = this.querySelector('.label');
        label.style.opacity = 1;
        label.classList.add('zoomed'); // Use the zoomed class to move the label

        // Show the back button
        backButton.classList.add('visible');
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    const grid = document.querySelector('.button-grid');
    const backButton = document.querySelector('.back-button');

    // Reset the zoom and fade classes
    document.querySelectorAll('.grid-button').forEach(btn => {
        btn.classList.remove('moved', 'faded', 'zoomed');
        btn.style.zIndex = ''; // Reset z-index
    });

    // Hide the back button
    backButton.classList.remove('visible');

    // Reset the grid scaling
    grid.classList.remove('zoomed');
});