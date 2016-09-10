var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var players = {};

function addPlayer(id, hp, x, y, velocity, orientation){
  players[id] = {"hp": hp, "x": x, "y": y, "velocity": velocity, "orientation": orientation};
}

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  addPlayer(socket.id, 100, 0, 0, 0, 0);
  console.log(players);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
