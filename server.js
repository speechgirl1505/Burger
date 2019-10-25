require("dotenv").config();
var key = require("./keys.js");
var getPass = key.password
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: getPass,
    database: ""
});