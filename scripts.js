// Detect the browser color scheme
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    // Function to change the favicon based on the color scheme
    function setFavicon() {
      const link = document.querySelector("link[rel*='icon']");
      
      // Check if the browser is in dark mode
      if (isDarkMode) {
        link.href = "images/favicon/favicon-dark.ico";
      } else {
        link.href = "images/favicon/favicon-light.ico";
      }
    }
  
    // Call the function when the page loads
    setFavicon();