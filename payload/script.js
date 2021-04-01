document.addEventListener('DOMContentLoaded', (event) => {

var cursor_x = -1;
var cursor_y = -1;
document.onmousemove = function(event)
{
    cursor_x = event.pageX;
    cursor_y = event.pageY;
    window.moveTo(cursor_x,cursor_y)
}
});

//document.addEventListener('DOMContentLoaded', (event) => {

//var startingTop = 150;
//var startingLeft = 100;
//document.onmousemove = function(event)
//{
//    math = Math.round(Math.sqrt(Math.pow(startingTop - event.clientY, 2)));
//    math2 = Math.round(Math.sqrt(Math.pow(startingLeft - event.clientX, 2)));
//    window.moveBy(math,math2)
//}
// });