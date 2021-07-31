const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.status(200)
    res.send("<html><body><h1>Welcome</h1></body></html>")
})

app.get('/hello', function(req, res) {
    res.status(200).json({ message: 'hello' })
        // res.send(JSON.stringify({ message: 'hello' }))
})

app.listen(3500)