
const Message = require('../database/models/messageSchema');

module.exports = io => {
 
    io.on('connection', async socket => {
        console.log('User connected');
        const message= await Message.find();
        message.forEach(element => {
          socket.emit('chat message', element.body);
        });

        socket.on('chat message', function(msg){           
            const data={
                date:Date.now(),
                body:msg
            }
            Message.create(data);//saving messages
            io.emit('chat message', msg);
          });
    })
}