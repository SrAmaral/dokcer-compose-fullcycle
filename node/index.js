const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const insert = `INSERT INTO people (name) values ('EAmaral')`
connection.query(insert)

const select = `SELECT name FROM people ORDER BY id DESC LIMIT 1`
let retorno = ''
const name = connection.query(select, function (err, result, fields) {
    if (err) throw err
    retorno = result[0].name
})
connection.end()

app.get('/', (req, res) => {
    res.send('</p>' +
                '<p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>' +
             '<p>' +
             '</p>' +
                 '<p>- ' + retorno + '.</p>' +
             '<p>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})