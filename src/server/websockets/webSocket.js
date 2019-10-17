module.exports = io => {
    io.on('connection', socket => {
        console.log('User connected');
       
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
          });
    })
}