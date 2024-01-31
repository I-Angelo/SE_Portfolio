require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const db  = mysql.createPool({
    connectionLimit : 10,
    host            : dbHost,
    user            : dbUser,
    password        : dbPassword,
    database        : 'Portfolio_contact'
  });

app.get('/api/data', (req, res) => {
// Replace this query with your actual query
const query = 'SELECT * FROM contacts';

    db.query(query, (err, results) => {
        console.log('establishing a connection...')
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
            console.log('Data retrieved...')
        }
    });
});

app.delete('/api/data/:user_id', (req, res) => {
    const contactId = req.params.user_id;

    // Your database query to delete the contact
    const query = 'DELETE FROM contacts WHERE user_id = ?';

    db.query(query, [contactId], (err, results) => {
        if (err) {
            console.error('Error executing delete query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Contact deleted successfully' });
        }
    });
});


app.post('/contact_me', (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const message_content = req.body.message_content;
    const contact_number = req.body.contact_number;
    const email_address = req.body.email_address;

    db.query("INSERT INTO contacts (first_name, last_name, message_content, contact_number, email_address) VALUES (?, ?, ?, ?, ?)", [first_name, last_name, message_content, contact_number, email_address], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send({first_name: first_name})
        }
    })
})



app.listen(8080, () => {
    console.log('server listening on port 8080');
})

