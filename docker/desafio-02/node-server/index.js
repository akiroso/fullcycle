const express = require('express');
const people = require('./business/people');
const database = require('./data-access/mysql');

const app = express();
const port = 3000;

database.build();

app.get('/', (req, res) => {
  people.insertPerson().then(() => {
    people.listPeople().then((result) => {
      let response = '<h1>Full Cycle Rocks!!</h1>';
      if (result.length > 0) {
        result.forEach(element => {
          response += `<h2>${element.name}</h2>`
        });
      } else {
        response += `<h3>No people found</h3>`;
      }
      res.send(response);
    });
  });    
});

app.listen(port, () => {
    console.log(`Started listening at http://localhost:${port}`)
});
