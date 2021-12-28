const express = require('express')
const app = express()
const port = 5000
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
  const singleProduct = products.find((product) => product.id === +productID)
  if (!singleProduct) {
    return res.status(404).send('Products Does Not Exist')
  }
  res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit)
  }
  if (sortedProducts.length === 0) {
    res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})
