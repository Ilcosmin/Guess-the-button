picks = [1, 2, 3];
var randomIndex = picks[Math.floor(Math.random() * picks.length)];

function exposeButton1() {
	if (randomIndex === 1) {
		document.getElementById("button1").innerHTML = "You win";
		document.getElementById("button1").style.backgroundColor ="SpringGreen";
	} else {
		document.getElementById("button1").innerHTML = "You lost";
		document.getElementById("button1").style.backgroundColor ="red";
	}
}

function exposeButton2() {
	if (randomIndex === 2) {
		document.getElementById("button2").innerHTML = "You win";
		document.getElementById("button2").style.backgroundColor ="SpringGreen";
	} else {
		document.getElementById("button2").innerHTML = "You lost";
		document.getElementById("button2").style.backgroundColor ="red";
	}
}

function exposeButton3() {
	if (randomIndex === 3) {
		document.getElementById("button3").innerHTML = "You win";
		document.getElementById("button3").style.backgroundColor ="SpringGreen";
	} else {
		document.getElementById("button3").innerHTML = "You lost";
		document.getElementById("button3").style.backgroundColor ="red";
	}
}
