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
ddocument.querySelectorAll('.grid-button').forEach(button => {
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

            // Delay to allow the button to complete its movement
            setTimeout(() => {
                // Create a new label element
                const newLabel = document.createElement('div');
                newLabel.className = 'new-label';
                newLabel.textContent = this.querySelector('.label').textContent;

                // Position the new label to the right of the button
                const buttonRectUpdated = this.getBoundingClientRect(); // Get the updated button position
                newLabel.style.position = 'absolute';
                newLabel.style.top = `${buttonRectUpdated.top + window.scrollY}px`;
                newLabel.style.left = `${buttonRectUpdated.right + 20}px`; // 20px padding from the right edge of the button
                newLabel.style.color = 'white';
                newLabel.style.fontSize = '44px';
                newLabel.style.fontWeight = 'bold';
                newLabel.style.opacity = 0;
                newLabel.style.transition = 'opacity 0.5s ease-in-out';
                newLabel.style.zIndex = 20;

                // Append the new label to the body
                document.body.appendChild(newLabel);

                // Trigger the fade-in effect
                setTimeout(() => {
                    newLabel.style.opacity = 1;
                }, 50); // Slight delay to ensure the transition is visible

            }, 500); // This delay matches the button's transform duration (500ms)

            // Show the back button
            const backButton = document.querySelector('.back-button');
            backButton.style.display = 'block';

        }, 500); // 500ms delay to see the shrinking effect
    });
});

document.querySelector('.back-button').addEventListener('click', function() {
    // Remove the new label
    const newLabel = document.querySelector('.new-label');
    if (newLabel) {
        newLabel.style.opacity = 0; // Fade out the new label
        setTimeout(() => {
            newLabel.remove(); // Remove it from the DOM after the fade-out
        }, 500); // Match this delay with the transition duration (500ms)
    }

    // Reset all transformations and styles
    document.querySelectorAll('.grid-button').forEach(button => {
        button.style.transform = ''; // Remove transformation
        button.style.zIndex = ''; // Reset z-index
        button.classList.remove('faded', 'no-hover'); // Remove faded and no-hover classes
    });

    // Hide the back button
    this.style.display = 'none';
});