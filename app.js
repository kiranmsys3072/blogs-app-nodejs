const express = require('express')
const path=require('path')
const app = express()

//static
app.use('/',express.static('public'))


app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname,"index.html"))
})
app.get('/post', function (req, res) {
  res.sendFile(path.resolve(__dirname,"post.html"))
})
app.get('/contact', function (req, res) {
  res.sendFile(path.resolve(__dirname,"contact.html"))
})
app.get('/about', function (req, res) {
  res.sendFile(path.resolve(__dirname,"about.html"))
})

app.listen(3000)