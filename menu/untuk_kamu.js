document.addEventListener("DOMContentLoaded", function () {
	const letterEl = document.getElementById("letterData");
	const nama = letterEl.getAttribute("data-nama");

	const content = {
		title: `${nama}`,
		p1: `${nama}Swn yaa ws hadir dan dadi bagian sng terindah, bercahaya nde uripkuu. Sepuranee yaa Gaiso ngekek i opo2 ng smn.`,
		p2: `Bareng Smnnn, dino-dino ku bahagia yang, Senyum manis e smn selalu berhasil ge aq bahagia. Swn yaa, Swn bgt ws glm nompo ch elek iki.`,
		p3: `Dengan hari bahagia ini hari valentine, aq pgn smn ngerti betapa berhargane smn ge aq, betapa sayang e aq ro smn, betapa wedine aq nk kelangan smn. aq menghargai setiap momen momen bahagia kita momen sedih kita sng pernah kita lewati bareng bareng.`,
		p4: `Trus ro aq yaa, ajarono aq py ben iso dadi wong lanang sng smn impikan. Mugo aq iso truss dadi arek sng slalu ge smn aman yaa, sng slalu ge smn nyaman, sng slalu ge smn bahagia dan di cintai dengan tuluss sak tulus tulus e. Sepuranee yaa gaiso kyok lanangan liyo nde jobo knu, sepuranee yaa nk aq mesti jarak i smn. Smn nesu bukane tak bujuk tpi malah tak jarak, yaa abiss smn nk nesuu lucu eg hehe, maaf yaa...`,
		p5: `Happy Valentine, ${nama}`,
	};

	function typeWriter(text, elementId, speed) {
		return new Promise((resolve) => {
			let i = 0;
			const element = document.getElementById(elementId);
			element.classList.add("typing");

			function type() {
				if (i < text.length) {
					element.innerHTML += text.charAt(i);
					i++;
					setTimeout(type, speed);
				} else {
					element.classList.remove("typing");
					resolve();
				}
			}
			type();
		});
	}

	async function startTyping() {
		await typeWriter(content.title, "typeTitle", 70);
		await typeWriter(content.p1, "p1", 50);
		await typeWriter(content.p2, "p2", 50);
		await typeWriter(content.p3, "p3", 50);
		await typeWriter(content.p4, "p4", 50);
		await typeWriter(content.p5, "p5", 80);

		const btn = document.getElementById("backBtn");
		btn.style.opacity = "1";
	}

	startTyping();
});
