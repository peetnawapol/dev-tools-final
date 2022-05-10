const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 5001

app.use(cors())
app.use(morgan())
app.use(helmet())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
