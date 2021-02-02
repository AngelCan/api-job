const express = require('express')
const {saveJobExchange, getJobExchange, getJobExchanges, updateExchange, deleteJobExchange} = require('../controllers/JobExchange.controller')
const apiJobExchange = express.Router()

apiJobExchange.post('/jobExchange', saveJobExchange)
apiJobExchange.get('/jobExchange/:jobExchangeId', getJobExchange)
apiJobExchange.get('/jobExchanges', getJobExchanges)
apiJobExchange.put('/jobExchange/:jobExchangeId',updateExchange)
apiJobExchange.delete('/jobExchange/:jobExchangeId', deleteJobExchange)

module.exports = apiJobExchange