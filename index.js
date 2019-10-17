require("dotenv").config();

// const dotenv = require("dotenv");
// dotenv.config();
const express = require("express");
const massive = require("massive");

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected!");
  })
  .catch(err => {
    console.log(err);
  });

app.listen(5051, () => console.log(`Listening on Port 5051`));
