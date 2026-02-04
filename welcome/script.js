function createHeart() {
	const heart = document.createElement("div");
	heart.innerHTML = "💗";
	heart.style.position = "fixed";
	heart.style.left = Math.random() * 100 + "vw";
	heart.style.top = "-10vh"; // Mulai dari atas layar
	heart.style.fontSize = Math.random() * 20 + 10 + "px";
	heart.style.opacity = Math.random() * 0.5 + 0.3;
	heart.style.color = "#ff4d6d";
	heart.style.pointerEvents = "none";
	heart.style.zIndex = "1";

	document.querySelector(".heart-bg").appendChild(heart);

	const duration = Math.random() * 3 + 5;

	heart.animate(
		[
			{ transform: "translateY(0) rotate(0deg)", opacity: heart.style.opacity },
			{
				transform: `translateY(110vh) rotate(${Math.random() * 360}deg)`,
				opacity: 0,
			},
		],
		{
			duration: duration * 1000,
			easing: "linear",
		},
	);

	setTimeout(() => {
		heart.remove();
	}, duration * 1000);
}

setInterval(createHeart, 400);

const audio = document.getElementById("mySong");

// Fungsi untuk memutar musik dari posisi terakhir// Fungsi untuk memuat konten tanpa pindah halaman
async function bukaMenu(url) {
    const mainContent = document.querySelector('.main-content');
    
    try {
        // Ambil isi halaman tujuan (misal: menu gallery)
        const response = await fetch(url);
        const text = await response.text();
        
        // Buat parser untuk mengambil bagian body saja
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const newContent = doc.querySelector('.gallery-wrapper') || doc.querySelector('main');

        if (newContent) {
            // Animasi transisi keluar
            mainContent.style.opacity = '0';
            
            setTimeout(() => {
                // Ganti isi konten utama dengan konten baru
                mainContent.innerHTML = newContent.innerHTML;
                mainContent.className = newContent.className;
                mainContent.style.opacity = '1';
                
                // Jika halaman baru butuh inisialisasi script (seperti slider gallery)
                if (typeof initGallery === "function") initGallery();
            }, 500);
        }
    } catch (err) {
        window.location.href = url; // Fallback jika fetch gagal
    }
}

// Jalankan fungsi
window.addEventListener("load", playConsistentMusic);