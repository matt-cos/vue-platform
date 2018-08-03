const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/home-content', (req, res) => {
  res.send(
    [
      {
        title: "Home",
        description: "I am building this platform to in an attempt to learn Vue"
      }
    ]
  )
})

app.get('/posts', (req, res) => {
  res.send(
    [
      {
        id: 1,
        title: "Hello World!",
        description: "Hi there! How are you?"
      },
      {
        id: 2,
        title: "Hey World!",
        description: "How you doin?"
      }
    ]
  )
})

app.listen(process.env.PORT || 8081)
