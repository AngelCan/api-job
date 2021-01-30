const express = require('express')
const {saveJobExchange, getJobExchange, getJobExchanges} = require('../controllers/JobExchange.controller')
const apiJobExchange = express.Router()

apiJobExchange.post('/jobExchange', saveJobExchange)
apiJobExchange.get('/jobExchange/:jobExchangeId', getJobExchange)
apiJobExchange.get('/jobExchanges', getJobExchanges)

module.exports = apiJobExchange