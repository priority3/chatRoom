const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)

const io = socketio(server)
app.use(express.static(path.join(__dirname, 'public')))
// emit on
io.on('conncetion', (socket) => {
    io.emit('sysMessage', '欢迎加入聊天室')
})

const PORT = process.env.PORT || 9527

server.listen(PORT, () => {
    console.log('this server is running on port ' + PORT)
})