// DEBUG PRINT -- Viewport size
/*function updateViewportSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('debug').innerText = `Viewport: ${width}px x ${height}px`;
}

window.addEventListener('resize', updateViewportSize);
updateViewportSize(); // Initialize on page load
*/

let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
let scrollUpDistance = 0;
const scrollThreshold = 50; // Adjust the threshold as needed

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        // User is scrolling down past the header height
        header.style.top = '-80px';
        scrollUpDistance = 0; // Reset the scroll-up distance
    } else if (scrollTop < lastScrollTop) {
        // User is scrolling up
        scrollUpDistance += lastScrollTop - scrollTop;
        if (scrollUpDistance > scrollThreshold) {
            // Show the header only if scrolled up more than the threshold
            header.style.top = '0';
        }
    }
    lastScrollTop = scrollTop;
});

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
/* HIGHLIGHT LINK TARGET *****************************************************/
/*****************************************************************************/

// Function to highlight the target element
function highlightElement(hash) {
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.classList.add('highlight');
            
            // Use a longer timeout to smoothly shrink back to the original size
            setTimeout(() => {
                targetElement.style.transition = 'transform 0.5s ease-in-out';
                targetElement.classList.remove('highlight');
            }, 500); // Duration should match the CSS transition
        }
    }
}

// Highlight element when the page loads
window.addEventListener('load', function () {
    highlightElement(window.location.hash);
});

// Highlight element when a link with a hash is clicked
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const hash = this.getAttribute('href');
        highlightElement(hash);
    });
});