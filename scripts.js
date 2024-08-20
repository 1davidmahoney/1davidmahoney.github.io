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

        // Get the title text from the button label
        const titleText = this.querySelector('.label').textContent;

        // Display the piece title in the header
        const pieceTitleElement = document.getElementById('pieceTitle');
        pieceTitleElement.textContent = titleText;
        pieceTitleElement.style.display = 'block';

        // Also update the secondary title element
        const pieceTitleSecondaryElement = document.getElementById('pieceTitleSecondary');
        pieceTitleSecondaryElement.textContent = titleText;
    });
});

// Adjust the position of the title on resize
function adjustTitlePosition() {
    const pieceTitleElement = document.getElementById('pieceTitle');
    const secondaryHeader = document.getElementById('secondaryHeader');
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 768) {
        pieceTitleElement.style.display = 'none';
        secondaryHeader.style.display = 'flex';
    } else {
        pieceTitleElement.style.display = 'block';
        secondaryHeader.style.display = 'none';
    }
}

// Initial adjustment and adjustment on resize
adjustTitlePosition();
window.addEventListener('resize', adjustTitlePosition);

document.querySelector('.back-button').addEventListener('click', function() {
    // Reset the grid to be visible again
    const buttonGrid = document.querySelector('.button-grid');
    buttonGrid.classList.remove('fade-out');

    // Hide the back button
    this.style.display = 'none';
});