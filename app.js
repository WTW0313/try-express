const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About Page</h1>')
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>404 Not Found</h1>')
    res.end()
  }
})

const port = 5000

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
