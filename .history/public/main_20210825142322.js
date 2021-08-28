const socket = io()

socket.on('sysMessage', (message) => {
    console.log(message)
})
