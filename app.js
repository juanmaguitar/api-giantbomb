const request = require('request')
const cors = require('cors')
const express = require('express')
var http = require('http');
const api_key= "be78ab7bb822bf90173073ba3336431b403e1ce5"
const PORT = process.env.PORT || 3000
var bodyParser = require('body-parser')
const app = express()

function options(query) {
	var opt = {
		query: query,
		url: 'http://api.giantbomb.com/search/?api_key=' + api_key + '&format=json&query=' + query +"&resources=game",
		headers: {
			'User-Agent': 'request'
		}
	}
	console.log(opt)
	return opt;
}

// 2ª URL
function opt(gameId) {
	var optInfo = {
		url: gameId + '?api_key=' + api_key + '&format=json',
		headers: {
			'User-Agent': 'request'
		}
	}
	return optInfo;
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/getInfo',function(req,res){
	var gameTitle = req.body.gameTitle;
	// endpoint api 
	request(options(gameTitle), function(_, _, body) {
		res.json( JSON.parse(body) )
	})
})

//GAMEID IS THE COMPLETE URL for second request
app.post('/getMoreInfo',function(req,res){
    var gameId = req.body.gameId;
    console.log(gameId)
    // endpoint api 
	request(opt(gameId), function(_, _, body) {
		res.json(JSON.parse(body))
	})
})


app.listen(PORT, () => console.log(`listening on port ${PORT}...`))

