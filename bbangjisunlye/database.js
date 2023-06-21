const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "54.180.35.207",
  port: "3306",
  user: "aa",
  password: "1234",
  database: "breadshop",
});

module.exports = connection;