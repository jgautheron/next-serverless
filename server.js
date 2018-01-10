const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const logMessage = (message) => {
  console.log(`${new Date()} - ${message}`)
}

const createServer = () => {
  const server = express()
  server.get('*', (req, res) => handle(req, res))
  return server
}

if (process.env.IN_LAMBDA) {
  module.exports = createServer()
} else {
  app.prepare().then(() => {
    const server = createServer()
    server.listen(port)
  })
}
