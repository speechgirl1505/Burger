//set up to get password for MySQL
require("dotenv").config();
var key = require("../keys");
var getPass = key.password
var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} 
else {
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: getPass,
    database: "burgers_db"
});
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;