'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const init = require('./init')
const exec = require('./utils/exec')
const stream = require('stream')
const log = require('./utils/log')
const path = require('path')

const app = express()
const port = '12300'

app.use(bodyParser.json({limit: '500mb'}))
app.use('/dist', express.static(path.join(__dirname, 'app' , 'dist')))
app.use('/static', express.static(path.join(__dirname, 'app' , 'static')))

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/app/index.html'))
})

app.get('/list', (req, res) => {
	res.send()
})

app.get('/get-status', (req, res) => {
	res.send()
})

app.post('/deploy', (req, res) => {

})

app.get('/*', (req, res) => {

	res.sendFile(path.resolve(__dirname + '/app/index.html'))
})

app.listen(port, function () {
  	log('app.listen', 'started at ' + port)
})
