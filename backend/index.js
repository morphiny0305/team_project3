const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");

app.get("/api/bread", (req, res) => {
  try {
    database.query("SELECT * FROM breadshop_info", (err, data) => {
      if (!err) {
        res.send({ data });
      } else {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});