const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password:'123456',
    database: 'di_schemas',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
    port: 3306
});

module.exports = pool.promise();