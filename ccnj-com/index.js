const arrow = document.getElementById('scroll-arrow');

function handleScroll() {
    if (window.scrollY > 10) {
        arrow.style.opacity = '0';
    } else {
        arrow.style.opacity = '1';
    }
}

window.addEventListener('scroll', handleScroll);

// Bounce every 4 seconds
setInterval(() => {
    if (window.scrollY <= 10) {
        arrow.style.opacity = '1';
        arrow.classList.add('bounce');
        setTimeout(() => arrow.classList.remove('bounce'), 600);
    }
}, 4000);
