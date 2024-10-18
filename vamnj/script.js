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
        header.style.top = '-82px';
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
