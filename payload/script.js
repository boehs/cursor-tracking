document.onmousemove = function (event) {
	window.moveBy(event.clientX - 150, event.clientY - 100);
	window.resizeTo(300, 300);
	var thiswindow2 = window.open(
		"/payload?",
		"NO ESCAPE",
		`toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=300`
	);
	thiswindow.moveTo(event.clientX - 150, event.clientY - 100);
	window.removeEventListener("mousemove", listener, false);
};
