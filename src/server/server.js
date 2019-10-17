const express= require ('express');
const socketIO=require('socket.io');
const config=require('../server/config/config');
const mongoose=require('mongoose');
const http=require('http');
const port=config.port;
const app= express();
const server= http.createServer(app);
const io=socketIO(server);


//Database
mongoose.connect(config.mongoose.db,config.mongoose.options )
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });
//sockets
require('./websockets/webSocket')(io);

app.use(express.static(config.static));


server.listen(port, function(){
  console.log(`server listening on port ${port}`);
});