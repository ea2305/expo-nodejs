const PORT = 3000

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

let app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// GET -> Leer
// POST -> Crear
// PUT | PATCH -> Actualizar
// DELETE -> Eliminar

app.get('/', function (req, res) {
  res.sendFile(
    path.join(__dirname + '/views/html/form.html')
  )
})

app.post('/data', function(req, res) {

  let info = req.body

  res.json({ message: info })
})

app.listen(PORT, function () {
  console.log('Server en puerto: ' + PORT)
})