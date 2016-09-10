var socket = io();

var ship = new Image();
var c = document.getElementById("gameCanvas");
var gameCanvas = c.getContext("2d");
var player = {x : 0, y : 0}

ship.src = "Ship.png";





function render(){
    gameCanvas.clearRect(0, 0, c.width, c.height);
    gameCanvas.drawImage(ship, player.x, player.y);
}

var gameLoop = setInterval(function (){
    render();
    player.x++;
}, 50);

