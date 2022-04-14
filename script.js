const countElement = document.getElementById("views");
update();
function update() {
	fetch("https://api.countapi.xyz/update/calculator/quickv/?amount=1").then(res => res.json()).then(res => {
		countElement.innerHTML = res.value;
	})
}
