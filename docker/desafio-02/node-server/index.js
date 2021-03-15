const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'node-server',
  password: 'node-server',
  database: 'node-db'
};

const connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) {
    console.log(err);
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!!</h1>')
})

app.listen(port, () => {
  console.log(`Started listening at http://localhost:${port}`)
})