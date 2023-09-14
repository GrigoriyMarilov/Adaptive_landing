
function liScroll(i) {
	let el;
	switch (i) {
		case 0:
			el = document.getElementsByClassName("main")
			break;
		case 1:
			el = document.getElementsByClassName("section1")
			break;
		case 2:
			el = document.getElementsByClassName("history__section")
			break;
		case 3:
			el = document.getElementsByClassName("history__banner")
			break;
		default:
			return;
	}
	el[0].scrollIntoView({ behavior: "smooth" })
	return;
}



function burger() {

	let nav = document.getElementsByClassName("nav")[0]
	console.log(nav.getBoundingClientRect());
	if (nav.getBoundingClientRect().y < -1) {
		nav.style.animation = "animation 2s 0s forwards";
	}
	if (nav.getBoundingClientRect().y > -1) {
		nav.style.animation = "aa 2s 0s forwards";
	}
	return;

}