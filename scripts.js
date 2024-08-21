document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior

        // Get the project ID from the button's data attribute
        const projectId = this.getAttribute('data-project-id');

        // Elements to fade out
        const buttonGrid = document.querySelector('.button-grid');
        const subtitle = document.querySelector('.subtitle');
        const navItems = document.querySelector('nav ul');

        // Elements to fade in
        const pieceContent = document.getElementById(`${projectId}-content`);
        const backButton = document.querySelector('.back-button');

        // Fade out the current elements
        buttonGrid.style.opacity = '0';
        subtitle.style.opacity = '0';
        navItems.style.opacity = '0';
        buttonGrid.style.transition = 'opacity 0.5s ease';
        subtitle.style.transition = 'opacity 0.5s ease';
        navItems.style.transition = 'opacity 0.5s ease';

        // After the fade-out, update content and fade in the new elements
        setTimeout(() => {
            // Update the subtitle text
            const labelText = this.querySelector('.label').textContent;
            subtitle.textContent = labelText;

            // Hide the button grid and nav items, and show the piece content and back button
            buttonGrid.style.display = 'none';
            navItems.style.display = 'none';
            pieceContent.style.display = 'block';
            backButton.style.display = 'block';

            // Fade in the new elements
            pieceContent.style.opacity = '1';
            subtitle.style.opacity = '1';
            backButton.style.opacity = '1';
            pieceContent.style.transition = 'opacity 0.5s ease';
            subtitle.style.transition = 'opacity 0.5s ease';
            backButton.style.transition = 'opacity 0.5s ease';
        }, 500); // Match the timeout with the fade-out duration
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Elements to fade out
    const pieceContents = document.querySelectorAll('.piece-content');
    const subtitle = document.querySelector('.subtitle');
    const backButton = document.querySelector('.back-button');

    // Elements to fade in
    const buttonGrid = document.querySelector('.button-grid');
    const navItems = document.querySelector('nav ul');

    // Fade out the current elements
    pieceContents.forEach(content => content.style.opacity = '0');
    subtitle.style.opacity = '0';
    backButton.style.opacity = '0';
    pieceContents.forEach(content => content.style.transition = 'opacity 0.5s ease');
    subtitle.style.transition = 'opacity 0.5s ease';
    backButton.style.transition = 'opacity 0.5s ease';

    // After the fade-out, update content and fade in the new elements
    setTimeout(() => {
        // Reset the subtitle to the original text
        subtitle.textContent = "Creative Development Portfolio";

        // Hide the piece content and back button, and show the button grid and nav items
        pieceContents.forEach(content => content.style.display = 'none');
        backButton.style.display = 'none';
        buttonGrid.style.display = 'grid'; // Restore grid display
        navItems.style.display = 'flex'; // Assuming the nav items are flex items

        // Restore the 3-column layout for the button grid
        buttonGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';

        // Fade in the new elements
        buttonGrid.style.opacity = '1';
        subtitle.style.opacity = '1';
        navItems.style.opacity = '1';
        buttonGrid.style.transition = 'opacity 0.5s ease';
        subtitle.style.transition = 'opacity 0.5s ease';
        navItems.style.transition = 'opacity 0.5s ease';
    }, 500); // Match the timeout with the fade-out duration
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
