const body = document.body;
const buttons = document.querySelectorAll("button");

const colors = {
	green: "green",
	red: "red",
	blue: "blue",
};

function getRandomColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const color = button.id === "random" ? getRandomColor() : colors[button.id];

		if (color) {
			body.style.backgroundColor = color;
		}
	});
});