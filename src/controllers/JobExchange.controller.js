'use strict'
const JobExchange = require('../models/JobExchange')

async function saveJobExchange(req, res){
    const{
        name,
        age, 
        gender,
        email,
        phone,
        vacant,
        civilStatus,
    } = req.body
    const jobExchange = JobExchange({
        name,
        age,
        gender,
        email,
        phone,
        vacant,
        civilStatus
    })
    try {
        const savedJobExchange = await jobExchange.save()
        res.status(201).send({message: savedJobExchange})
    } catch (error) {
        throw error
    }
}

async function getJobExchange(req, res){
    let jobExchangeId = req.params.jobExchangeId
    try {
        await JobExchange.findOne({_id: jobExchangeId}, (err, jobExchange)=>{
            if(err) return res.status(500).send({message: 'An internal server error'})
            if(!jobExchange) return res.status(404).send({message: `the jobExchenge id ${jobExchangeId} not found`})
            res.status(200).send({message: jobExchange})
        })
    } catch (error) {
        throw error
    }
}

async function getJobExchanges(req, res){
    try {
        const jobExchanges = await JobExchange.find().lean().exec()
        res.status(200).send({message: jobExchanges})
    } catch (error) {
        throw error
    }
}

async function updateExchange(req, res){
    let jobExchangeId = req.params.jobExchangeId
    let updated = req.body
    try {
        await JobExchange.findByIdAndUpdate({_id: jobExchangeId}, updated, (err, jobExcahnges)=>{
            if(err) return res.status(500).send({message: 'An internal server error'})
            if(!jobExcahnges) return res.status(404).send({message: `canot update this feedback because ${err}`})
            res.status(200).send({message: 'jobExchange Updated'})
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    saveJobExchange,
    getJobExchange,
    getJobExchanges,
    updateExchange
}