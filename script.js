function startScrollingText() {
	const scrollingText = document.querySelector(".scrolling-text");

	function animateText() {
		const textWidth = scrollingText.offsetWidth;
		const viewportWidth = window.innerWidth;

		// Desired speed in pixels per second
		const speed = 100; // Adjust this value to change the speed

		// Total distance the text needs to travel
		const totalDistance = textWidth + viewportWidth;

		// Calculate the animation duration
		const duration = totalDistance / speed;

		// Starting and ending positions
		const startPosition = viewportWidth;
		const endPosition = -textWidth;

		// Apply initial styles
		scrollingText.style.left = `${startPosition}px`;
		scrollingText.style.transition = "none";

		// Trigger reflow to ensure the styles are applied
		scrollingText.offsetHeight;

		// Apply the transition
		scrollingText.style.transition = `left ${duration}s linear`;

		// Start the animation
		scrollingText.style.left = `${endPosition}px`;

		// When the animation ends, restart it
		scrollingText.addEventListener("transitionend", animateText, { once: true });
	}

	// Start the initial animation
	animateText();

	// Recalculate on window resize
	window.addEventListener("resize", function () {
		// Remove any ongoing transition
		scrollingText.style.transition = "none";

		// Restart the animation
		animateText();
	});
}

// Start the scrolling text when the page loads
window.addEventListener("load", startScrollingText);