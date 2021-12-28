const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})

// app.get
// app.post
// app.delete
// app.put
// app.use
// app.all
// app.listen
