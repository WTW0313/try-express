const express = require('express')
const app = express()
const port = 5000
// const logger = require('../middlewares/logger')
// const authorize = require('../middlewares/authorize')
const morgan = require('morgan')

// * req => middleware => res

// * 1. use vs route
// * 2. options - our own / express / third party

// app.use([logger, authorize])
// app.use(express.static('../public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})
