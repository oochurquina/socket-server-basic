class Sockets {

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection',(socket)=>{

            socket.on('msj-to-server',(data)=>{
                console.log(data);
                this.io.emit('msj-from-server',data)
            })
        })
    }
}
module.exports = Sockets;