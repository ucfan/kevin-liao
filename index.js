const express = require('express')
const path = require('path')
const app = express()

const router = express.Router()

router.use('/dist', express.static('dist'));
router.use('/bower_components', express.static('bower_components'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})


const prefix = 'kevin-liao'
app.use('/' + prefix, router)

const port = 3000
app.listen(port, () => console.log(`http://localhost:${3000}/${prefix}`))
