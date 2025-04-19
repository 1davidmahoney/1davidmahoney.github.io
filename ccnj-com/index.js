/*****************************************************************************/
/* FADE-IN PAGE ON LOADED ****************************************************/
/*****************************************************************************/

window.addEventListener('load', () =>
  document.body.classList.add('page-loaded')
);

/*****************************************************************************/
/* FADE-OUT ON SCROLL ********************************************************/
/*****************************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const overlayElements = document.querySelectorAll('.splash-overlay');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const contentElement = entry.target.parentElement.querySelector('.splash-content');
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 0;  // fade out overlay
                    if (contentElement) contentElement.style.opacity = 1;  // fade in content
                } else {
                    entry.target.style.opacity = 1;  // fade overlay back in
                    if (contentElement) contentElement.style.opacity = 0;  // fade content back out
                }
            });
        }, {
            threshold: 0.35,
            rootMargin: '0px 0px -100px 0px'
        });

        overlayElements.forEach(el => observer.observe(el));
    } else {
        overlayElements.forEach(el => el.style.opacity = 0);
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
