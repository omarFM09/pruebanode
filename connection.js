const mysql = require('mysql');

const configDB = {
    connectionLimit: 10,
    host: 'pruebanode.c52td7ok4xaj.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    port: '3306',
    database: 'pruebanode',
    debug: true
};

var pool = mysql.createPool(configDB);

module.exports = pool;