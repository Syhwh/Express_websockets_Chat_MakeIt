const express= require ('express');
const socketIO=require('socket.io');
const config=require('../server/config/config');
const http=require('http');
const port=config.port;

const app= express();
const server= http.createServer(app);
const io=socketIO(server);


//sockets
require('./websockets/webSocket')(io);



app.use(express.static(config.static));





server.listen(port, function(){
  console.log(`server listening on port ${port}`);
});