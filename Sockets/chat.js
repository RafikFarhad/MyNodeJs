jabe = function (io, socket) {

    socket.emit('news', 'Tumi connect hoiso----');
    //socket.emit('news', { flash : 'Hello world'});
    socket.on('barta', function(msg){
        console.log('message: ' + msg);
        io.sockets.emit('new-chat', msg);
    });

};

module.exports = jabe;