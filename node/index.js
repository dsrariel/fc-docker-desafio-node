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

connection.query(`
    CREATE TABLE IF NOT EXISTS people(
        id INT AUTO_INCREMENT NOT NULL,
        name VARCHAR(255),
        PRIMARY KEY(id)
    );
`)
const sql = `INSERT INTO people(name) values('Wesley')`
connection.query(sql)
connection.end()

app.get('/', (_, res) => {
    const connection = mysql.createConnection(config)
    connection.query(`SELECT * FROM people;`, (err, result, _) => {
        let htmlResponse = '<h1>Full Cycle</h1>';

        if (err) throw err;

        if (result.length === 0) {
            return
        }

        htmlResponse += '<ul>';
        for (let i = 0; i < result.length; i++) {
            htmlResponse += `<li>${result[i].name}</li>`;
        }
        htmlResponse += '</ul>';

        res.send(htmlResponse);
    })
    connection.end();
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})