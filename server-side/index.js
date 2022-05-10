const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()
const sequelize = require('./connections/dbConfig')
require('dotenv').config()

const routes = require('./routes')
const port = process.env.PORT || 5001

app.use(cors())
app.use(morgan())
app.use(helmet())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/v2', routes)

const start = async () => {
  const [PORT, HOST] = [process.env.PORT || 3001, 'localhost']

  try {
    await sequelize.sync(
      { force: false } // Reset db every time
    )

    app.listen(PORT);
    console.log(`Running on http://${HOST}:${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

start()
