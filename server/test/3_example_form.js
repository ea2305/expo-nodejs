const PORT = 3000
const express = require('express')
const path = require('path')

let app = express()

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
  res.json({ message: 'Información recibida' })
})

app.listen(PORT, function () {
  console.log('Server en puerto: ' + PORT)
})