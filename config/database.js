const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'asd123',
    port     : 3306,
    database : 'my_restapi_db'
});

module.exports = connection;