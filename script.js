/*****************************************************************************/
/* SIDE MENU *****************************************************************/
/*****************************************************************************/

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('open'); // Toggle the 'open' class to slide in/out

    if (menu.classList.contains('open')) {
        // Add a one-time event listener to close the menu when clicking outside
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        // Remove the event listener if the menu is closed
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const menu = document.getElementById('sideMenu');
    const menuButton = document.querySelector('.menu-button');

    // Check if the click happened outside the menu and the menu button
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('open'); // Close the menu
        document.removeEventListener('click', closeMenuOnClickOutside); // Clean up the event listener
    }
}

/*****************************************************************************/
/* KEEP CONTENT-WRAPPER BELOW HEADER *****************************************/
/*****************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (header && contentWrapper) {
        const updateMargin = () => {
            const headerHeight = header.offsetHeight;
            contentWrapper.style.marginTop = `${headerHeight}px`;
        };

        // Initial adjustment
        updateMargin();

        // Adjust on window resize to handle dynamic height changes
        window.addEventListener('resize', updateMargin);
    }
});
