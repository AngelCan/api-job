const express = require('express')
const {saveJobExchange, getJobExchange, getJobExchanges, updateExchange} = require('../controllers/JobExchange.controller')
const apiJobExchange = express.Router()

apiJobExchange.post('/jobExchange', saveJobExchange)
apiJobExchange.get('/jobExchange/:jobExchangeId', getJobExchange)
apiJobExchange.get('/jobExchanges', getJobExchanges)
apiJobExchange.put('/jobExchange/:jobExchangeId',updateExchange)

module.exports = apiJobExchange