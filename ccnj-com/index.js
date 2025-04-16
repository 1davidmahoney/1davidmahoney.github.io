/*****************************************************************************/
/* FADE-OUT ON SCROLL ********************************************************/
/*****************************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.splash-overlay');

    if ('IntersectionObserver' in window) {
        // Modern browser: Apply scroll-based animation
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    //entry.target.classList.add('active');
                    entry.target.style.opacity = 0;
                } else {
                    entry.target.style.opacity = 1;
                }
            });
        }, {
            threshold: 0.35, // Trigger when 35% of the element is visible
            rootMargin: '0px 0px -100px 0px' // Start 100px before the bottom of the viewport
        });

        elements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers: Ensure elements are invisible immediately
        elements.forEach(el => {
            el.style.opacity = 0; // Fully invisible
            //el.style.transform = 'translateY(0)'; // No vertical offset
        });
    }
});

/*****************************************************************************/
/* HEADER-HERO SHIFT ON SCROLL ***********************************************/
/*****************************************************************************/

const logo1 = document.getElementById('logo-text-1');
const logo2 = document.getElementById('logo-text-2');
const giantlogo1 = document.getElementById('giant-logo-text-1');
const giantlogo2 = document.getElementById('giant-logo-text-2');
const header = document.querySelector('header');

function shiftLogo() {
    
    if (window.scrollY > 10) {
        header.classList.add('header-on');
        logo1.classList.add('logo-on');
        logo2.classList.add('logo-on');
        giantlogo1.classList.remove('logo-on');
        giantlogo2.classList.remove('logo-on');
    } else {
        header.classList.remove('header-on');
        logo1.classList.remove('logo-on');
        logo2.classList.remove('logo-on');
        giantlogo1.classList.add('logo-on');
        giantlogo2.classList.add('logo-on');
    }
}

window.addEventListener('scroll', shiftLogo);

shiftLogo();

/*****************************************************************************/
/* SCROLL NAG ****************************************************************/
/*****************************************************************************/

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
