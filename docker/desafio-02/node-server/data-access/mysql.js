const mysql = require('mysql');

const config = {
    host: 'db',
    user: 'node-server',
    password: 'node-server',
    database: 'node-db'
};

const retryInterval = 10;
var ready = false;
var connection;

function connect() {
    connection = mysql.createConnection(config);

    connection.connect(function (err) {
        if (err) {
            console.log(err);
            console.warn(`Connection failed! Retrying in ${retryInterval} seconds`);
            setTimeout(() => { connect(); }, retryInterval * 1000);
        } else {
            console.log(`Connected to mysql database! Connection: ${JSON.stringify(connection.threadId)}`);
            ready = true;
        }
    });

    connection.on('error', function(err) {
        console.warn(`Connection error [${err}]! Trying to reconnect`);
        ready = false;
        connect();
    })
}

function executeQuery(query) {
    if (ready) {
        connection.query(query);
    } else {
        log.warn(`Connection unavailable! Skipping query execution.`);
    }
}

module.exports = {
    connect,
    executeQuery
};