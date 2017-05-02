const request = require('request')
const cors = require('cors')
const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

const URL_BASE = 'http://api.giantbomb.com'

const options = {
  headers: {
    'User-Agent': 'request'
  }
}

app.use(cors())

app.get('*', function (req, res) {
  const urlRequested = req.originalUrl
  console.log('requesting: ' + urlRequested)
  options.url = URL_BASE + urlRequested
  request(options, function (error, response, body) {
    if (error) res.status(500).send('Something went wrong!')
    try {
      const parsedResult = JSON.parse(body)
      res.json(parsedResult)
    } catch (e) {
      res.status(500).send("Couldn't get a JSON!")
    }
  })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))

