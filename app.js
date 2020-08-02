require('dotenv').config()
const express = require('express')
const app = express()
const { getFlights} = require('./getFlightsService')


app.get('/', (req, res) => {
  res.send('Hello world')
})


app.get('/flights', async (req, res) => {
  const data = await getFlights()
  res.send(data)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})


module.exports = { app }