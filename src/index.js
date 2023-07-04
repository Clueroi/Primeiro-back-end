const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, vem que o pai ta on 23')
})

app.listen(3000, function(){console.log('online, acesse o servidor: https://localhost:3000')})