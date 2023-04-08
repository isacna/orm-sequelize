const bodyParser = require('body-parser')
const pessoas = require('./pessoas.routes.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
}