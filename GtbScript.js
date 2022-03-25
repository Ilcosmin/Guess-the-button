var picks = ["button1", "button2", "button3"];
var randomIndex = picks[Math.floor(Math.random() * picks.length)];

function expose(id) {
	let status = "You lost";
	let color = "red";
	if (randomIndex === id) {
		status = "You win";
		color = "SpringGreen";
		
	}
	document.getElementById(id).innerHTML = status;
	document.getElementById(id).style.backgroundColor = color;
}

function button1() {
	let id = "button1";
	expose(id);
}

function button2() {
	let id = "button2";
	expose(id);
}

function button3() {
	let id = "button3";
	expose(id);
}
