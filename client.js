var socket = io();

var img = new Image();
var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");

img.src = "Ship.png";



img.onload = function () {
    ctx.drawImage(img, 0, 0);
}
