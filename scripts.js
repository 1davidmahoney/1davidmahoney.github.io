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

        // Move the button to a fixed position toward the left of the screen
        const targetX = 100; // Fixed X position (100px from the left)
        const buttonRect = this.getBoundingClientRect(); // Get the current button position
        const targetY = buttonRect.top; // Maintain the current Y position

        // Apply the transformation to move the button and scale it up
        this.style.position = 'fixed';
        this.style.left = `${targetX}px`;
        this.style.top = `${targetY}px`;
        this.style.transform = `scale(1.5)`;
        this.style.transition = 'transform 0.5s ease, left 0.5s ease, top 0.5s ease';
        this.style.zIndex = 10; // Bring the clicked button above others

        // Fade out all buttons except the clicked one
        document.querySelectorAll('.grid-button').forEach(btn => {
            if (btn !== this) {
                btn.classList.add('faded');
            }
        });

        // Create a new label element
        const newLabel = document.createElement('div');
        newLabel.className = 'new-label';
        newLabel.textContent = this.querySelector('.label').textContent;

        // Position the new label to the right of the button
        newLabel.style.position = 'fixed';
        newLabel.style.top = `${targetY}px`;
        newLabel.style.left = `${targetX + buttonRect.width * 1.5 + 20}px`; // 20px padding from the right edge of the button
        newLabel.style.color = 'white';
        newLabel.style.fontSize = '44px';
        newLabel.style.fontWeight = 'bold';
        newLabel.style.opacity = 0;
        newLabel.style.transition = 'opacity 0.5s ease-in-out';
        newLabel.style.zIndex = 20;
        newLabel.style.webkitTextStroke = '1px black'; // Add an outline around the text

        // Append the new label to the body
        document.body.appendChild(newLabel);

        // Trigger the fade-in effect
        setTimeout(() => {
            newLabel.style.opacity = 1;
        }, 50); // Slight delay to ensure the transition is visible

        // Ensure the label stays near the button when resizing
        const updateLabelPosition = () => {
            newLabel.style.top = `${window.innerHeight / 2 - this.getBoundingClientRect().height / 2}px`;
            newLabel.style.left = `${targetX + this.getBoundingClientRect().width * 1.5 + 20}px`;
            this.style.top = `${window.innerHeight / 2 - this.getBoundingClientRect().height / 2}px`;
        };

        // Attach the resize event listener
        window.addEventListener('resize', updateLabelPosition);

        // Store a reference to the update function for cleanup later
        this.updateLabelPosition = updateLabelPosition;

        // Show the back button
        const backButton = document.querySelector('.back-button');
        backButton.style.display = 'block';
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
        button.style.position = ''; // Reset position
        button.style.left = ''; // Reset left position
        button.style.top = ''; // Reset top position
        button.style.transform = ''; // Remove transformation
        button.style.transition = ''; // Reset transition
        button.style.zIndex = ''; // Reset z-index
        button.classList.remove('faded', 'no-hover'); // Remove faded and no-hover classes

        // Remove the resize event listener if it was added
        if (button.updateLabelPosition) {
            window.removeEventListener('resize', button.updateLabelPosition);
            delete button.updateLabelPosition;
        }
    });

    // Hide the back button
    this.style.display = 'none';
});