var socket = io();

var ship = new Image();
var c = document.getElementById("gameCanvas");
var gameCanvas = c.getContext("2d");
var player = {x : 0, y : 0, aX : 0, aY : 0, speed : 0.1};
var keys = {37 : 0, 39 : 0};

ship.src = "Ship.png";



document.body.addEventListener('keydown', function (e) {
    keys[e.keyCode] = 1;
});

document.body.addEventListener('keyup', function (e) {
    keys[e.keyCode] = 0;
});
     

function render(){
    gameCanvas.clearRect(0, 0, c.width, c.height);
    gameCanvas.drawImage(ship, player.x, player.y);
}

var gameLoop = setInterval(function (){
    //Gamelogic
    var move = -keys[37] + keys[39];

    player.aX = move * player.speed;

    
    console.log(keys[37]);

    player.x += player.aX;
    player.y += player.aY;

    render();
    
}, 100);

