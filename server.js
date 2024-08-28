const io = require('socket.io')(3000,{
    cors: {
        origin: "*",
      },
})

const users = {}

socket.on('new-user', userName => {
    users[socket.id] = userName
    socket.broadcast.emit('user-connected', userName)
})

io.on('connection', socket => {
    
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    })
})