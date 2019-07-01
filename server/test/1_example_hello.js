

const PORT = 3000
const express = require('express')

let app = express()

app.get('/', function (req, res) {
  res.send('Hola mundo!')
})

app.listen(PORT, function () {
  console.log('Server en puerto: ' + PORT)
})