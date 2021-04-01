function makeid(length) {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

document.onmousemove = function (event) {
	window.moveBy(event.clientX - 150, event.clientY - 100);
	window.resizeTo(300, 300);
	var thiswindow2 = window.open(
		"/payload?" + makeid(5),
		"NO ESCAPE",
		`toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=300`
	);
	thiswindow.moveTo(event.clientX - 150, event.clientY - 100);
	window.removeEventListener("mousemove", listener, false);
};
