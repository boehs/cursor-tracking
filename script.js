document.onmousemove = function listener(e) {
  var thiswindow = window.open(
      "/payload", "NO ESCAPE",
      `toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=300`);
  thiswindow.moveTo(e.clientX - 150, e.clientY - 100);
  window.location.href = "../rick";
};
