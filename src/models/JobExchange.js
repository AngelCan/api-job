'use strict'
const mongose = require('mongoose')

const Schema = mongose.Schema
const JobExchange = Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    vacant : {type: String, required: true},
    civilStatus: {type: String, required: true},
}, {
    timestamps: true
})

module.exports = mongose.model('JobExchange', JobExchange)