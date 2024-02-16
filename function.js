// Calling function on click over keys
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	var crash = document
		.querySelectorAll("button")
		[i].addEventListener("click", function () {
			var buttonText = this.childNodes[0].textContent.toLowerCase(); 

			makeSound(buttonText);

			buttonAnimation(buttonText);
		});
}

// Calling function on pressed by the keys on keyboard
document.addEventListener("keydown", function (event) {

	makeSound(event.key.toLowerCase());

	buttonAnimation(event.key.toLowerCase());
});

// function to play sound.
function makeSound(key) {
	switch (key) {
		case "a":
			var audio = new Audio("./sounds/clap.wav");
			audio.play();
			break;
		case "s":
			var audio = new Audio("./sounds/hihat.wav");
			audio.play();
			break;
		case "d":
			var audio = new Audio("./sounds/kick.wav");
			audio.play();
			break;
		case "f":
			var audio = new Audio("./sounds/openhat.wav");
			audio.play();
			break;
		case "g":
			var audio = new Audio("./sounds/boom.wav");
			audio.play();
			break;
		case "h":
			var audio = new Audio("./sounds/ride.wav");
			audio.play();
			break;
		case "j":
			var audio = new Audio("./sounds/snare.wav");
			audio.play();
			break;
		case "k":
			var audio = new Audio("./sounds/tom.wav");
			audio.play();
			break;
		case "l":
			var audio = new Audio("./sounds/tink.wav");
			audio.play();
			break;
		default:
			break;
	}
}

// function to show the animation and call playing in CSS.
function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("playing");

	setTimeout(function () {
		activeButton.classList.remove("playing");
	}, 100);
}