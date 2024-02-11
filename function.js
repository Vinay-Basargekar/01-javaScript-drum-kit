document.addEventListener("DOMContentLoaded", function () {
	// Add event listener for keyboard key presses
	window.addEventListener("keydown", function (event) {
		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
		if (!audio) return; // Stop the function if there's no audio element associated with the pressed key
		audio.currentTime = 0; // Rewind the audio to the start to allow for rapid consecutive presses
		audio.play();
		key.classList.add("playing"); // Add class for visual effect
	});

	// Remove visual effect when transition ends
	function removeTransition(event) {
		if (event.propertyName !== "transform") return;
		this.classList.remove("playing");
	}

	const keysWithTransition = document.querySelectorAll(".key");
	keysWithTransition.forEach((key) =>
		key.addEventListener("transitionend", removeTransition)
	);
});
