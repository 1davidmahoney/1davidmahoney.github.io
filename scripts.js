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

        // Apply the zoom effect to the entire grid
        grid.classList.add('zoomed');

        // Fade out all buttons except the clicked one
        document.querySelectorAll('.grid-button').forEach(btn => {
            if (btn !== this) {
                btn.classList.add('faded');
            }
        });

        // Keep the clicked button visible and centered
        this.style.zIndex = 10; // Bring the clicked button above others
    });
});