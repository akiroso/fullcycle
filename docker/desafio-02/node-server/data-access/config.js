const parameters = {
    connectionLimit: 10,
    host: 'db',
    user: 'node-server',
    password: 'node-server',
    database: 'node-db'
};

const retryInterval = 10;

module.exports = {
    parameters,
    retryInterval
};