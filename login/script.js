function createHeart() {
	const heart = document.createElement("div");
	heart.classList.add("floating-heart");
	heart.innerHTML = "❤️";

	// Posisi acak
	heart.style.left = Math.random() * 100 + "vw";
	heart.style.animationDuration = Math.random() * 3 + 2 + "s";
	heart.style.fontSize = Math.random() * 20 + 10 + "px";
	heart.style.opacity = Math.random();

	document.querySelector(".heart-bg").appendChild(heart);

	// Hilangkan hati setelah animasi selesai
	setTimeout(() => {
		heart.remove();
	}, 5000);
}

// Jalankan animasi hati setiap 300ms
setInterval(createHeart, 300);

// CSS tambahan via JS untuk animasi melayang
const style = document.createElement("style");
style.innerHTML = `
@keyframes moveUp {
    from { transform: translateY(100vh); }
    to { transform: translateY(-10vh); }
}
.floating-heart {
    animation: moveUp linear forwards;
}
`;
document.head.appendChild(style);


