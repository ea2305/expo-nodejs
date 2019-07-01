const PORT = 3000

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

let app = express()

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// set Pug template engine
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.post('/data', function(req, res) {

  let info = req.body

  res.json({ message: info })
})

app.listen(PORT, function () {
  console.log('Server en puerto: ' + PORT)
})