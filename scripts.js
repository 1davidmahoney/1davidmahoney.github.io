// Removed all hover-related JavaScript

// HANDLE PROJECT BUTTON CLICK.
document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior

        // Set the piece title in the header
        const pieceTitle = document.getElementById('pieceTitle');
        const titleText = this.querySelector('.label').textContent;
        pieceTitle.textContent = titleText;
        pieceTitle.style.display = 'block';
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Reset the grid to be visible again
    const buttonGrid = document.querySelector('.button-grid');

    // Hide the back button
    this.style.display = 'none';

    // Hide the piece title
    const pieceTitle = document.getElementById('pieceTitle');
    pieceTitle.style.display = 'none';
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

function updateViewportInfo() {
    const viewportInfo = document.getElementById('viewport-info');
    const width = window.innerWidth;
    const height = window.innerHeight;
    viewportInfo.textContent = `Viewport: ${width}px x ${height}px`;
}

// Run the function on page load and window resize
window.addEventListener('load', updateViewportInfo);
window.addEventListener('resize', updateViewportInfo);
