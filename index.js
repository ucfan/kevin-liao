const express = require('express')
const path = require('path')
const app = express()

app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const port = 3000
app.listen(port, () => console.log(`http://localhost:${3000}`))
