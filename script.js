document.onmousemove=function(e) {

function getMousePos(e) {
    return [e.clientX,e.clientY];
}
var mousecoords = getMousePos(e);
var thiswindow = window.open("/payload",'NO ESCAPE',
                                   `toolbar=no,
                                    location=no,
                                    status=no,
                                    menubar=no,
                                    scrollbars=no,
                                    resizable=no,
                                    width=300,
                                    height=300`)
thiswindow.moveTo(mousecoords[0]-150,mousecoords[1]-100)
window.close()
}
