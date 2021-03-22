const pool = require('./pool').getPool();

function build() {
    console.log('Migrating database');
    executeQuery(`
        CREATE TABLE IF NOT EXISTS people (
            id int not null auto_increment primary key,
            name varchar(255) not null
    )`);
}

function executeQuery(query) {
    return new Promise((resolve, reject) => {
        pool.query(query, function(err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    build,
    executeQuery,
};