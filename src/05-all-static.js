const express = require('express')
const path = require('path')

const app = express()
const port = 5000

// setup static and middleware
app.use(express.static('../public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('Resource not found')
})

app.listen(port, () => {
  console.log(`The server is running on the http://localhost:${port}`)
})
