document.addEventListener("DOMContentLoaded", function () {
	const items = document.querySelectorAll(".fade-item");
	const audio = document.getElementById("mySong");

	// Kontrol Musik
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

	// Munculkan teks satu per satu
	items.forEach((item, index) => {
		setTimeout(
			() => {
				item.style.opacity = "1";
				item.style.transform = "translateY(0)";
			},
			1200 * (index + 1),
		); // Muncul tiap 1.2 detik agar lebih dramatis
	});
});
