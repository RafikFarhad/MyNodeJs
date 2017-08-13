$(document).ready(function () {


    console.log('Real Time running...');

    var socket = io.connect('http://localhost:3000');
    socket.on('news', function (data) {
        console.log(data);
    });
    $('#form').submit(function(){
        socket.emit('barta', $('#msg').val());
        $('#msg').val('next msg ' + new Date().getTime());
        return false;
    });
    
    socket.on('new-chat', function (data) {
        $("#arena").append('<li class="list-group-item">'+data+'</li>');
    });


});