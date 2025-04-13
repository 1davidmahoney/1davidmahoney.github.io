/*****************************************************************************/
/* FADE-IN-UP ON SCROLL ******************************************************/
/*****************************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.scroll-fade');

    if ('IntersectionObserver' in window) {
        // Modern browser: Apply scroll-based animation
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.35, // Trigger when 35% of the element is visible
            rootMargin: '0px 0px -100px 0px' // Start 100px before the bottom of the viewport
        });

        elements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers: Ensure elements are visible immediately
        elements.forEach(el => {
            el.style.opacity = 1; // Fully visible
            el.style.transform = 'translateY(0)'; // No vertical offset
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.scroll-fade-quick');

    if ('IntersectionObserver' in window) {
        // Modern browser: Apply scroll-based animation
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.05, // Trigger when 5% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Start 50px before the bottom of the viewport
        });

        elements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers: Ensure elements are visible immediately
        elements.forEach(el => {
            el.style.opacity = 1; // Fully visible
            el.style.transform = 'translateY(0)'; // No vertical offset
        });
    }
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
    const menuButton = document.getElementById('menu-button');

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

/*****************************************************************************/
/* KEEP CONTENT-WRAPPER BELOW HEADER *****************************************/
/*****************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const contentWrapper = document.querySelector('.container');

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
