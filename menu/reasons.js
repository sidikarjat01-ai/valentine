document.addEventListener("DOMContentLoaded", function () {
	const reasons = document.querySelectorAll(".reason-item");
	const audio = document.getElementById("mySong");

	// Putar musik
	if (audio) {
		audio.volume = 0.4;
		audio.play().catch(() => {
			document.addEventListener(
				"click",
				() => {
					audio.play();
				},
				{ once: true },
			);
		});
	}

	// Munculkan alasan satu per satu dengan delay
	reasons.forEach((item, index) => {
		setTimeout(
			() => {
				item.classList.add("show");
			},
			2000 * (index + 1),
		); // Jeda 0.4 detik tiap item
	});
});
