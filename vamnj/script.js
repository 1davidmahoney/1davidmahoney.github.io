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
let isScrolling = false;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                // Scroll down past header height
                header.style.top = '-100px';
            } else if (scrollTop < lastScrollTop && scrollTop > 0) {
                // Scroll up but not at the very top of the page
                header.style.top = '0';
            }
            lastScrollTop = scrollTop;
            isScrolling = false;
        });
        isScrolling = true;
    }
});
