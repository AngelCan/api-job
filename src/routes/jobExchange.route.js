const express = require('express')
const {saveJobExchange, getJobExchange, getJobExchanges, updateExchange, deleteJobExchange} = require('../controllers/JobExchange.controller')
const verfyToken = require('../middlewares/verifyToken')
const apiJobExchange = express.Router()

apiJobExchange.post('/jobExchange', verfyToken, saveJobExchange)
apiJobExchange.get('/jobExchange/:jobExchangeId', getJobExchange)
apiJobExchange.get('/jobExchanges', getJobExchanges)
apiJobExchange.put('/jobExchange/:jobExchangeId', verfyToken, updateExchange)
apiJobExchange.delete('/jobExchange/:jobExchangeId', verfyToken, deleteJobExchange)

module.exports = apiJobExchange