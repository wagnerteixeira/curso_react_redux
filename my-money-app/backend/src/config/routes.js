const express = require('express')
var expressListRoutes   = require('express-list-routes')

module.exports = function(server){
    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
    console.log("ROTAS:\n")
    expressListRoutes({ prefix: '/api' }, 'API:', router )
}
