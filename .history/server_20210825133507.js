const express = require('express')
const sockietio = require('socket.io')

const app = express()

const PORT = process.env.PORT || 9527

app.listen(PORT, () => {
    console.log('this server is running on port ' + PORT)
})
