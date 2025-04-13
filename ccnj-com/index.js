/*****************************************************************************/
/* HEADER-HERO SHIFT ON SCROLL ***********************************************/
/*****************************************************************************/

//const logo = document.getElementById('header-logo');
const header = document.querySelector('header');

function shiftLogo() {
    
    //const logoHeight = logo.offsetHeight;
    //const headerHeight = header.offsetHeight;
    //const centeredTop = (headerHeight - logoHeight) / 2 + 'px';
    
    if (window.scrollY > 10) {
        //logo.style.width = '50%';
        //logo.style.top = '30px';//centeredTop;
        /*logo.style.paddingLeft = '23vw';
        logo.style.marginTop = '0';
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.3)';*/
        header.classList.add('header-on');
    } else {
        //logo.style.width = '100%';
        //logo.style.top = '100px';
        /*logo.style.paddingLeft = '5vw';
        logo.style.marginTop = '22vw';
        header.style.backgroundColor = 'revert';
        header.style.boxShadow = 'revert';*/
        header.classList.remove('header-on');
    }
}

window.addEventListener('scroll', shiftLogo);

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
