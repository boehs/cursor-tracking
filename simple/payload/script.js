document.onmousemove = function (event) {
  	window.moveBy(event.clientX - 125, event.clientY - 100);
	window.resizeTo(300, 300);
	
	/* window.moveTo(event.clientX - 125, event.clientY - 100); */
};
