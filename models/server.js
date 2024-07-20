

const express = require('express');
const http = require('http');
const path = require('path');
const socketio= require('socket.io');
const Sockets = require('./sockets');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.server = http.createServer(this.app)
        // configuraciones del socket
        this.io = socketio(this.server,{});
    }
    configurarSocket(){
        new Sockets(this.io);
    }
    middleware(){

        this.app.use(express.static(path.resolve(__dirname,'../public')))
    }

    execute(){
        this.middleware();
        this.configurarSocket();
        this.server.listen(this.port, ()=>{
            console.log('Server corriendo en puerto: ',this.port);
        })
    }
}

module.exports = Server;