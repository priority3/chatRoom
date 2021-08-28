const socket = io()
const params = Qs.parse(location.search, { ignoreQueryPrefix: true })
// console.log(params)
let { name, room } = params

socket.on('sysMessage', (message) => {
    console.log(message)
})

document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault()
    socket.emit('chatMessage', {
        name,
        content: document.getElementById('msg').value,
    })

    socket.on('chatMessage', (message) => {
        // 判断是否和当前页面的name相同
        let isMine = message.name === name
        let messageContainer = document.getElementById('message-container')
        messageContainer.innerHTML = `
            <div class="d-flex ${
                isMine ? 'justify - content - end' : 'justify - content - start'
            }">
                <div class="card w-50 p-2 ${isMine ? 'bg-success' : ''}">${
            message.content
        }</div>
            </div>
        `
    })
})
