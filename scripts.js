// Run on page load to handle initial fade-ins
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const buttonGrid = document.querySelector('.button-grid');

    // Trigger the header fade-in
    header.style.opacity = '1';

    // Delay the button grid fade-in by 300ms (or any duration you prefer)
    setTimeout(() => {
        buttonGrid.style.opacity = '1';
    }, 500); // Adjust the delay as needed
});

// Event listener for project button clicks
document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        const projectId = this.getAttribute('data-project-id');

        const buttonGrid = document.querySelector('.button-grid');
        const subtitle = document.querySelector('.subtitle');
        const navItems = document.querySelector('nav ul');

        const pieceContent = document.getElementById(`${projectId}-content`);
        const backButton = document.querySelector('.back-button');

        // Fade out the current elements
        buttonGrid.style.opacity = '0';
        subtitle.style.opacity = '0';
        navItems.style.opacity = '0';

        setTimeout(() => {
            buttonGrid.style.display = 'none';
            navItems.style.display = 'none';
            pieceContent.style.display = 'block';
            backButton.style.display = 'block';

            pieceContent.style.opacity = '0';
            subtitle.style.opacity = '0';
            backButton.style.opacity = '0';

            setTimeout(() => {
                pieceContent.style.transition = 'opacity 0.5s ease';
                subtitle.style.transition = 'opacity 0.5s ease';
                backButton.style.transition = 'opacity 0.5s ease';

                pieceContent.style.opacity = '1';
                subtitle.style.opacity = '1';
                backButton.style.opacity = '1';
            }, 10);
        }, 500);
    });
});

// Event listener for back button click
document.querySelector('.back-button').addEventListener('click', function() {
    const pieceContents = document.querySelectorAll('.piece-content');
    const subtitle = document.querySelector('.subtitle');
    const backButton = document.querySelector('.back-button');

    const buttonGrid = document.querySelector('.button-grid');
    const navItems = document.querySelector('nav ul');

    pieceContents.forEach(content => content.style.opacity = '0');
    subtitle.style.opacity = '0';
    backButton.style.opacity = '0';

    setTimeout(() => {
        pieceContents.forEach(content => content.style.display = 'none');
        backButton.style.display = 'none';
        buttonGrid.style.display = 'grid';
        navItems.style.display = 'block';

        buttonGrid.style.opacity = '0';
        navItems.style.opacity = '0';
        subtitle.style.opacity = '0';

        setTimeout(() => {
            buttonGrid.style.transition = 'opacity 0.5s ease';
            navItems.style.transition = 'opacity 0.5s ease';
            subtitle.style.transition = 'opacity 0.5s ease';

            buttonGrid.style.opacity = '1';
            navItems.style.opacity = '1';
            subtitle.style.opacity = '1';
        }, 10);
    }, 500);
});

// Function to adjust content wrapper padding based on header height
function adjustContentWrapperPadding() {
    const header = document.querySelector('header');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (header && contentWrapper) {
        const headerHeight = header.offsetHeight;
        contentWrapper.style.paddingTop = `${headerHeight}px`;
    }
}

// Run on page load to adjust content padding
window.addEventListener('load', adjustContentWrapperPadding);

// Run on window resize to adjust content padding
window.addEventListener('resize', adjustContentWrapperPadding);
