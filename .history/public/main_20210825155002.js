const socket = io()
const params = Qs.parse(location.search, { ignoreQueryPrefix: true })
console.log(params)

socket.on('sysMessage', (message) => {
    console.log(message)
})
