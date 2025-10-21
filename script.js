function setBoxClockAngle(box, angleArr) {
	box.children[0].style.transform = `rotate(${angleArr[0]}deg)`;
	box.children[1].style.transform = `rotate(${angleArr[1]}deg)`;
}

const angleMap = {
	ud: [-90, 90],
	lr: [0, 180],
	ur: [0, -90],
	dr: [0, 90],
	dl: [90, 180],
	ul: [-90, 180],
	rs: [135, 135],
};

function generateAngles(digit) {
	switch (digit) {
		case 0: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ud",
				"dr",
				"dl",
				"ud",
				"ud",
				"ud",
				"ud",
				"ud",
				"ud",
				"ud",
				"ud",
				"ud",
				"ud",
				"ur",
				"ul",
				"ud",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		case 1: {
			return [
				"dr",
				"lr",
				"dl",
				"rs",
				"ur",
				"dl",
				"ud",
				"rs",
				"rs",
				"ud",
				"ud",
				"rs",
				"rs",
				"ud",
				"ud",
				"rs",
				"dr",
				"ul",
				"ur",
				"dl",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		case 2: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ur",
				"lr",
				"dl",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ur",
				"lr",
				"dl",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		case 3: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ur",
				"lr",
				"dl",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ur",
				"lr",
				"dl",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		case 4: {
			return [
				"dr",
				"dl",
				"dr",
				"dl",
				"ud",
				"ud",
				"ud",
				"ud",
				"ud",
				"ur",
				"ul",
				"ud",
				"ur",
				"lr",
				"dl",
				"ud",
				"rs",
				"rs",
				"ud",
				"ud",
				"rs",
				"rs",
				"ur",
				"ul",
			];
		}
		case 5: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ur",
				"lr",
				"dl",
				"ur",
				"lr",
				"dl",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		case 6: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ur",
				"lr",
				"dl",
				"ud",
				"dr",
				"dl",
				"ud",
				"ud",
				"ur",
				"ul",
				"ud",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		case 7: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ur",
				"lr",
				"dl",
				"ud",
				"rs",
				"rs",
				"ud",
				"ud",
				"rs",
				"rs",
				"ud",
				"ud",
				"rs",
				"rs",
				"ud",
				"ud",
				"rs",
				"rs",
				"ur",
				"ul",
			];
		}
		case 8: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ud",
				"dr",
				"dl",
				"ud",
				"ud",
				"ur",
				"ul",
				"ud",
				"ud",
				"dr",
				"dl",
				"ud",
				"ud",
				"ur",
				"ul",
				"ud",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		case 9: {
			return [
				"dr",
				"lr",
				"lr",
				"dl",
				"ud",
				"dr",
				"dl",
				"ud",
				"ud",
				"ur",
				"ul",
				"ud",
				"ur",
				"lr",
				"dl",
				"ud",
				"dr",
				"lr",
				"ul",
				"ud",
				"ur",
				"lr",
				"lr",
				"ul",
			];
		}
		default: {
			return [
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
				"rs",
			];
		}
	}
}

function setDigits(nums) {
	const digits = document.getElementsByClassName("digit");
	for (let i = 0; i < 6; i++) {
		const angleCodes = generateAngles(nums[i]);
		const angles = angleCodes.map(
			(angleCode) => angleMap[angleCode] || [135, 135]
		);
		let j = 0;
		for (const childBox of digits[i].children) {
			setBoxClockAngle(childBox, angles[j]);
			j++;
		}
	}
}

document.getElementById("line").addEventListener("change", (e) => {
	document.documentElement.style.setProperty("--line-colour", e.target.value);
	const config = JSON.parse(localStorage.getItem("clock-clock"));
	const colConfig = { line: e.target.value, bg: "#111111" };
	if (config && config.line && config.bg) {
		colConfig.bg = config.bg;
	}
	localStorage.setItem("clock-clock", JSON.stringify(colConfig));
});

document.getElementById("bg").addEventListener("change", (e) => {
	document.documentElement.style.setProperty("--bg-colour", e.target.value);
	const config = JSON.parse(localStorage.getItem("clock-clock"));
	const colConfig = { bg: e.target.value, line: "#ffff00" };
	if (config && config.line && config.bg) {
		colConfig.line = config.line;
	}
	localStorage.setItem("clock-clock", JSON.stringify(colConfig));
});

const config = JSON.parse(localStorage.getItem("clock-clock"));
if (config && config.bg && config.line) {
	document.documentElement.style.setProperty("--line-colour", config.line);
	document.documentElement.style.setProperty("--bg-colour", config.bg);
	document.getElementById("line").value = config.line;
	document.getElementById("bg").value = config.bg;
} else {
	localStorage.removeItem("clock-clock");
	localStorage.setItem(
		"clock-clock",
		JSON.stringify({ line: "#ffff00", bg: "#111111" })
	);
}

document.getElementById("toggle-fullscreen").addEventListener("click", () => {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen(); // full page
	} else {
		document.exitFullscreen();
	}
});

setInterval(() => {
	let timeObj = new Date();
	let hh = String(timeObj.getHours() % 12 || 12).padStart(2, "0");
	let mm = String(timeObj.getMinutes()).padStart(2, "0");
	let ss = String(timeObj.getSeconds()).padStart(2, "0");
	const time = hh + mm + ss;
	setDigits(time.split("").map(Number));
}, 1000);
