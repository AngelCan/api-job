'use strict'
const mongose = require('mongoose')

const Schema = mongose.Schema
const User = Schema({
    completeName: {type: String, required: true},
    email: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true
})

module.exports = mongose.model('user', User)