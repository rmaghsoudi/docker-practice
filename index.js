const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = `mongodb://${process.env.DB_PORT_27017_TCP_ADDR}:${process.env.DB_PORT_27017_TCP_PORT}/app`

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  console.log("Connected successfully to server")
})

app.get('/', function (req, res) {
  res.send('Docker is great!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})