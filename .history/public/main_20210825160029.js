const socket = io()
const params = Qs.parse(location.search, { ignoreQueryPrefix: true })
// console.log(params)
let { name, room } = params

socket.on('sysMessage', (message) => {
    console.log(message)
})

document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.defaultPrevented()
    socket.emit('chatMessage', {
        name,
        content: document.getElementById('msg').value,
    })
})
