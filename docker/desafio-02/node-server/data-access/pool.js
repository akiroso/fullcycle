const mysql = require('mysql');
const config = require('./config');

let pool;
function getPool() {
    if (!pool) {
        pool = mysql.createPool(config.parameters);    
    }
    return pool;
}

module.exports = {
    getPool,
};

