const request = require('supertest')
const app = require('../app')

describe("GET /v1/jobExchanges", ()=>{
    it('respond whit json a list of jobExchanges', done =>{
        request(app)
        .get('/v1/jobExchanges')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
})

describe("GET /v1/jobExchange/:jobExchangeId", ()=>{
    const jobExchangeId = '6015a1c2ae9fa6259cde5f31'
    const noExist = '6015a1c2ae9fa6259cde5f32'
    it('response whit json a single jobExchange', done =>{
        request(app)
        .get(`/v1/jobExchange/${jobExchangeId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    }) 
    
    it('this whit json "the jobExchange not found" when the jsonExchange doenst exists', done =>{
        request(app)
        .get(`/v1/jobExchange/${noExist}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect('{"message":"the jobExchenge id 6015a1c2ae9fa6259cde5f32 not found"}')
        .end( err =>{
            if(err) done(err)
            done()
        })
    })
    
})