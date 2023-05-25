const mysql = require("mysql2");


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sm00chie7!",
    database: "Tracker"
})

module.exports = db;