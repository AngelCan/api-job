const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('mongoose-morgan')
const app = express()
const cors = require('cors')
const apiJobExchange = require('./routes/jobExchange.route')
//const authApi = require()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan({
    connectionString: `mongodb://localhost:27017/job`
}))

app.use('/v1', apiJobExchange)

module.exports = app