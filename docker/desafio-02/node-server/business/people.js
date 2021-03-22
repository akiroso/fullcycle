const randomName = require('node-random-name');
const mysql = require('../data-access/mysql');

function insertPerson() {
    const name = randomName();
    console.log(`Inserting ${name} into people's table`);
    return mysql.executeQuery(`INSERT INTO people (name) values ('${name}')`)
    .catch((err) => {
        console.log(err);
    });
}

function listPeople() {
    return mysql.executeQuery(`SELECT name FROM people ORDER BY id DESC`)
    .then((result) => {
        if (result) {
            return result.splice('name');
        }
        return [];
    })
    .catch((err) => {
        return [];
    });
}

module.exports = {
    insertPerson,
    listPeople
};

