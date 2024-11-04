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
