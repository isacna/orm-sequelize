const bodyParser = require('body-parser')

const pessoas = require('./pessoas.routes.js')
const niveis = require('./niveis.routes.js')
const turmas = require('./turmas.routes.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
        )
}