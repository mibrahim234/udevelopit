const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

  // Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '$A41a4b6bc27',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });