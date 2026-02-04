document.addEventListener("DOMContentLoaded", function () {
	let index = 0;
	const slider = document.getElementById("slider");
	const audio = document.getElementById("mySong");

	// Putar musik otomatis jika memungkinkan
	function playMusic() {
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
	}

	function slide() {
		// Efek Fade Out
		slider.style.opacity = 0;

		setTimeout(() => {
			index++;
			if (index >= galleryImages.length) {
				index = 0;
			}
			slider.src = galleryImages[index];

			// Efek Fade In
			slider.style.opacity = 1;
		}, 500); // Tunggu 0.5 detik (sesuai durasi transisi CSS)
	}

	playMusic();
	setInterval(slide, 3000);
});
