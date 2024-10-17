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

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        // Scroll down past header height
        header.style.top = '-82px';
    } else if (scrollTop < lastScrollTop) {
        // Scroll up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
