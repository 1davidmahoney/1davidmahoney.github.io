// AUTO-ACTIVATE HOVER EFFECTS WHEN ON MOBILE (SINGLE-COLUMN BUTTON GRID).
document.addEventListener('DOMContentLoaded', () => {
    function isElementNearCenter(element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;

        // Check if the element's center is within a threshold of the viewport's center
        return Math.abs(elementCenter - viewportCenter) < rect.height / 2;
    }

    function checkButtonPositions() {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.grid-button').forEach(button => {
                if (isElementNearCenter(button)) {
                    button.classList.add('hover-active');
                } else {
                    button.classList.remove('hover-active');
                }
            });
        } else {
            document.querySelectorAll('.grid-button').forEach(button => {
                button.classList.remove('hover-active');
            });
        }
    }

    // Initial check
    checkButtonPositions();

    // Recheck on scroll and resize
    window.addEventListener('scroll', checkButtonPositions);
    window.addEventListener('resize', checkButtonPositions);
});

// HANDLE PROJECT BUTTON CLICK.
document.querySelectorAll('.grid-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior

        // Temporarily disable hover effects
        this.classList.add('no-hover');
        
        // Reset transform to default (shrink back to original size)
        this.style.transform = '';

        // Force a reflow to ensure the button is reset before further calculations
        void this.offsetWidth;

        // Delay to allow the shrinking effect to be visible
        setTimeout(() => {
            const targetButton = document.getElementById('narrative-design-button');
            const targetRect = targetButton.getBoundingClientRect(); // Get target button's position
            const buttonRect = this.getBoundingClientRect(); // Get clicked button's position

            // Calculate the translation needed to move the clicked button to the top-left of the target button
			// ( Must adjust distance to account for scaling a couple lines down -- specifically, by decreasing distance by HALF THE AMOUNT THAT THE BUTTON IS INCREASING BY. )
			// ( Ex: If scaling by 2x, then adjustment is '+ (buttonRect.width / 2)' b/c increase is 1x button width. )
			const buttonScale = 1.5;
			const translateX = (targetRect.left - buttonRect.left) + (buttonRect.width * buttonScale - buttonRect.width) / 2;
			const translateY = (targetRect.top - buttonRect.top) + (buttonRect.height * buttonScale - buttonRect.height) / 2;

			// Apply the transformation to move the button and scale it up
			this.style.transform = `translate(${translateX}px, ${translateY}px) scale(${buttonScale})`;
            this.style.zIndex = 10; // Bring the clicked button above others

            // Fade out all buttons except the clicked one
            document.querySelectorAll('.grid-button').forEach(btn => {
                if (btn !== this) {
                    btn.classList.add('faded');
                }
            });

            // Show the back button
            const backButton = document.querySelector('.back-button');
            backButton.style.display = 'block';
        }, 500); // 500ms delay to see the shrinking effect
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Add the no-hover class to all buttons to disable hover effects
    document.querySelectorAll('.grid-button').forEach(button => {
        button.classList.add('no-hover');
    });

    // Reset all transformations and styles after a short delay to allow the no-hover class to take effect
    setTimeout(() => {
        document.querySelectorAll('.grid-button').forEach(button => {
            button.style.transform = ''; // Remove transformation
            button.style.zIndex = ''; // Reset z-index
            button.classList.remove('faded'); // Remove faded class
        });

        // Hide the back button
        this.style.display = 'none';

        // Re-enable hover effects after the transition
        setTimeout(() => {
            document.querySelectorAll('.grid-button').forEach(button => {
                button.classList.remove('no-hover');
            });
        }, 500); // Match this delay with the transition duration (500ms)
    }, 50); // Small delay before resetting transformations
});
