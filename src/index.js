import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('GET/')
})

app.put('/', (req, res) => {
  res.send('PUT/')
})

app.post('/', (req, res) => {
  res.send('POST/')
})

app.delete('/', (req, res) => {
  res.send('DELETE/')
})


app.listen(3000, function(){console.log('online, acesse o servidor: http://localhost:3000')})