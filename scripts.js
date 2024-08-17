function setFavicon(lightMode) {
    var favicon = document.querySelector('link[rel="icon"]');
    
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    
    if (lightMode.matches) {
        favicon.href = '/images/favicon/favicon-dark.ico';  // Favicon for light mode
    } else {
        favicon.href = '/images/favicon/favicon-light.ico'; // Favicon for dark mode
    }
}

// Set favicon on initial load
var lightMode = window.matchMedia('(prefers-color-scheme: light)');
setFavicon(lightMode);

// Update favicon when the theme changes
lightMode.addEventListener('change', () => setFavicon(lightMode));
