const socket = io()
const params = Qs.parse(location.search, { ignoreQueryPrefix: true })
// console.log(params)
let { name, room } = params

socket.on('sysMessage', (message) => {
    console.log(message)
})

// socket.emit('chatMessage', {
//     name,
//     content: document.getElementById('msg').value,
// })

document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault()
    socket.emit('chatMessage', {
        name: name,
        content: document.getElementById('msg').value,
    })
})

socket.on('chatMessage', (message) => {
    // 判断是否和当前页面的name相同
    console.log(message)
    let isMine = message.name === name

    document.getElementById('message-container').innerHTML += `
        <div class="d-flex ${
            isMine ? 'justify-content-end' : 'justify-content-start'
        }">
            <div class="card w-50 p-2 ${isMine ? 'bg-success' : ''}">${
        message.content
    }</div>
        </div>
    `
})

// socket.on('chatMessage', (message) => {
//     console.log(message)
// })
