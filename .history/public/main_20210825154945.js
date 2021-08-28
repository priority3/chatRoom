const socket = io()
const params = Qs.parse(location.search, { ignoreQueryPrefix: true })

socket.on('sysMessage', (message) => {
    console.log(message)
})
