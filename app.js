const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const indexRouter = require('./router/index');

const app = express();

app.use('/', indexRouter);

connection.connect();
connection.query('SELECT * from employee', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.', err);
});
connection.end();

app.listen(3000, () => {
    console.log('express server is opened on port 3000');
})