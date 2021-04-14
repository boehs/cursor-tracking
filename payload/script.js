document.onmousemove = function (event) {
  window.moveBy(event.clientX - 150, event.clientY - 115);
  window.resizeTo(300, 300);

  /* window.moveTo(event.clientX - 125, event.clientY - 100); */
};

window.onbeforeunload = function () {
  localStorage.setItem("panic", true);
};
