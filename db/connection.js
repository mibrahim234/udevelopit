const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '$A41a4b6bc27',
    database: 'election'
  });
  
  module.exports = db;
