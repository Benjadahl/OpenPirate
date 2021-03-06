var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.get('/client.js', function(req, res){
  res.sendFile(__dirname + '/client.js');
});

app.get('/ship.png', function(req, res){
  res.sendFile(__dirname + '/Assets/Ship.png');
});

var players = {};

function addPlayer(id, hp, x, y, velocity, velocityChange, orientation){
  players[id] = {"hp": hp, "x": x, "y": y, "velocity": velocity, "velocityChange": velocityChange, "orientation": orientation};
}

function updateVelocity(){
  for (var p in players){
    console.log(players);
    var vel = players[p].velocity;
    if (vel <= 10 && vel >= -5){
      players[p].velocity += players[p].velocityChange;
    }
  }
}

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('velocityChange', function(change){
    if (change === -1 || change === 0 || change === 1){
      players[socket.id].velocityChange = change;
    }
  });
  socket.on
  addPlayer(socket.id, 100, 0, 0, 0, 0, 0);
  console.log(players);
});

setInterval(function() {
  updateVelocity();
}, 50);

http.listen(3000, function(){
  console.log('listening on *:3000');
});
