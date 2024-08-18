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

        const grid = document.querySelector('.button-grid');
        const gridRect = grid.getBoundingClientRect(); // Get grid's position
        const buttonRect = this.getBoundingClientRect(); // Get button's position

        // Calculate the translation needed to move the button to the top-left of the grid
        const translateX = gridRect.left - buttonRect.left;
        const translateY = gridRect.top - buttonRect.top;

        // Apply the transformation to move the button and scale it up
        this.style.transform = `translate(${translateX}px, ${translateY}px) scale(2)`;
        this.style.zIndex = 10; // Bring the clicked button above others

        // Fade out all buttons except the clicked one
        document.querySelectorAll('.grid-button').forEach(btn => {
            if (btn !== this) {
                btn.classList.add('faded');
            }
        });

        // Show the back button
        const backButton = document.querySelector('.back-button');
        backButton.style.display = 'block';
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Reset all transformations and styles
    document.querySelectorAll('.grid-button').forEach(button => {
        button.style.transform = ''; // Remove transformation
        button.style.zIndex = ''; // Reset z-index
        button.classList.remove('faded'); // Remove faded class
    });

    // Hide the back button
    this.style.display = 'none';
});