const socket = io()
const params = Qs.parse(location.search, { ignoreQueryPrefix: true })
// console.log(params)
let { name, room } = params

socket.on('sysMessage', (message) => {
    console.log(message)
})

socket.emit('joinroom', { name, room })

socket.on('roomUsers', (arrList) => {
    // console.log(arrList)
    // 获得了实时的房间用户，将其渲染到页面当中
    // arrList.forEach((element) => {
    //     // console.log(element)
    //     document.getElementById(
    //         'users-container'
    //     ).innerHTML += `<li class="list-group-item">${element.name}</li>`
    // })
    // 也可以用map方法
    let usersContainer = document.getElementById('users-container')
    let inHtml = ''
    arrList.map((element) => {
        inHtml += `<li class="list-group-item">${element.name}</li>`
    })

    // 在加入页面以前还要对页面进行刷新操作，
    while (usersContainer.childNodes.length > 3) {
        // 因为里面初始化是有三个标签
        usersContainer.removeChild(usersContainer.lastChild)
    }
    document.getElementById('users-container').innerHTML += inHtml
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
        <div class="d-flex my-2 ${
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
