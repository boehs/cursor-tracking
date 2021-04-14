const delay = (ms) => new Promise((res) => setTimeout(res, ms));

document.onmousemove = function listener(e) {
	let panic = localStorage.getItem("panic");
	if (panic || panic == null) {
		var thiswindow = window.open(
			"/payload",
			"NO ESCAPE",
			`toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=300`
		);
		localStorage.setItem("panic", false);
		thiswindow.moveTo(e.clientX - 150, e.clientY - 100);
	}
	var x = e.clientX;
	var y = e.clientY;
};

window.addEventListener("load", (event) => {
	localStorage.setItem("panic", true);
});
