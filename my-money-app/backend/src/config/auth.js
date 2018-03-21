const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
    if(req.method === 'OTIONS'){
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']

        if(!token){
            return res.status(400).send({errors: ['Não foi informado o token']})
        }

        jwt.verify(token, env.authSecret, function(err, decoded){
            if(err){
                return res.status(400).send({errors: ['Falha ao validar token.']})
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}