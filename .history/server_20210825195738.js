const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
const { getRoomUsers, userJoin } = require('./user')

const app = express()
const server = http.createServer(app)

const io = socketio(server)
// emit on
io.on('connection', (socket) => {
    socket.on('joinroom', ({ name, room }) => {
        socket.join(room)
        userJoin(socket.id, name, room)
        io.to(room).emit('roomUsers', getRoomUsers)

        // socket.emit('request' /* … */) // emit an event to the socket
        socket.to(room).emit('sysMessage', '欢迎加入聊天室') // emit an event to all connected sockets
        socket.to(room).on('chatMessage', (message) => {
            // console.log(message)
            // 将每个用户发送到服务器的消息 广播回去 ， 这样做到了信息的交互
            // console.log(message)
            io.emit('chatMessage', message)
        }) // listen to the event
    })
})
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 9527

server.listen(PORT, () => {
    console.log('this server is running on port ' + PORT)
})
