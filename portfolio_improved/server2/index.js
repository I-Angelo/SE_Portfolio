require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

app.post('/contact_me', async (req, res) => {
  try {
    const { first_name, last_name, email_address, contact_number, message_content } = req.body;

    const insertQuery = `INSERT INTO contacts (first_name, last_name, email_address, contact_number, message_content)
                         VALUES ($1, $2, $3, $4, $5)`;

    const values = [first_name, last_name, email_address, contact_number, message_content];

    await pool.query(insertQuery, values);

    res.send({ success: true, message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
