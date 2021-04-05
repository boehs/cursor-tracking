document.onmousemove = function (event) {
	window.resizeTo(300, 300);
	window.moveTo(event.clientX - 150, event.clientY - 100);
};
