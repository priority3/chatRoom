const express = require('express')
const sockietio = require('socket.io')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 9527

app.listen(PORT, () => {
    console.log('this server is running on port ' + PORT)
})
