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
  if (!urlRequested.includes('favicon.ico')) {
    options.url = URL_BASE + urlRequested
    request(options, function (error, response, body) {
      if (error) res.status(500).send('Something went wrong!')
      else if (body) res.json(JSON.parse(body))
      else res.status(404).send('No results!')
    })
  } else {
    res.status(404).send('No results!')
  }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))

