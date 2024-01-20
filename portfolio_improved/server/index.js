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

// console.log(app)


/*
1. In the server side we start by installing node.js with 'npm init'
2. install express
3. No we go back to the 'client side and install AXIOS....which is what we are going to use to send 
    requests from our client side to the back end and to get data from the back end to the front end. 
4. delete the unnecessary files on the client side before doing anything else,
    and in the manifest.json delete the following :

    '{
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }.  '
5. in the client side as well , also delete from app.js anything between the 'header' tags.
6. We are back from the app.js to the server side and install cors
7. Research npm cors documentation
8.  const cors = require('cors');

    app.use(cors());
8.a. This is what the code should look like at this point :

    '   
        const express = require('express');
        const app = express();
        const cors = require('cors');
        const mysql = require('mysql');

        app.use(cors());

        app.get('/', (req, res) => {
            res.send('Like and subscribe')
        })

        app.listen(8080, () => {
            console.log('server listening on port 8080');
        })

        // console.log(app)

9. restart the server node index.js
10. Go back to the client side that is running the front end and try the apicall button
    once more and it should be working
11. It should show in the inspect consol 'woohoo!'
12. now we see that we have this code here since the beggining 

    app.get('/', (req, res) => {
        res.send('Like and subscribe')
    })

    for us to access that data , we are going back to the client side and get rid of the 'wohoo!' and 
    pass the data....go to the app.js file in the client side 
13. coming back from the client side and after creating the database , we are going to install
    mysql package in the server npm install mysql
14. import mysql here
15. reference mysql documentation mysql npm on google
16. make a connection pool option to mantain the channel open 'pooling connection' in the docs
17. add the necessary code from the docs and make the appropiate changes:

    var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'example.org',
    user            : 'bob',
    password        : 'secret',
    database        : 'my_db'
    });

18. create the .env file. add it to the gitignore file. Add to .en the necessary information for us 
    to connect with the database for now but incllude the password so it reamins hidden and lastly import
    .env here and pass the constants from .env to the code to connect with the database. 
19. add this code to the top of the file to bring .env file :
    require('dotenv').config();
20. the part of the code we brought related to mysql , this is how the code should look like :

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
20.a. *** npm install dotenv' package ****
21. This is what the code should look so far
22. Now we are going to use the temporary get request we have to send data to the databse to test it.
23. updated 'get' request to make a 'post' manually to the database :

    New 'get' request:

    '
        app.get('/', (req, res) => {
            db.query("INSERT INTO contacts (first_name, last_name, message_content, contact_number) VALUES ('Ivan', 'Angulo','First message content!','561-757-1787')", (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result)
                }
            })
        })
24. run it! It should work!
25. If you run into an error 'does not support Authentication Protocol' or something like that , go to the 'query' tab
    in mysql workbench and add this line of code :

        ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'Incendious833118$$';

        which contains the password and run it with the lightning bolt.
        You should get a green checkmark and confirmation that was taken.
26. The database should contain at this point your first entry!
27. code on this page so far for the first entery :

        '
        require('dotenv').config();
        const express = require('express');
        const app = express();
        const cors = require('cors');
        const mysql = require('mysql');

        app.use(cors());

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


        app.get('/', (req, res) => {
            db.query("INSERT INTO contacts (first_name, last_name, message_content, contact_number, email_address) VALUES ('Ivan', 'Angulo','First message content!','561-757-1787','ivanangeloc@icloud.com')", (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result)
                }
            })
        })



        app.listen(8080, () => {
            console.log('server listening on port 8080');
        })

        '

28. Now we are going to replace the 'get' request for a 'post' request coming from the form from the 
    client side.
29. In order for us to acces the data we are getting from the form in the front end or client side ,
    we need to install in the server side 'body-parser' package.

        '
        require('dotenv').config();
        const express = require('express');
        const app = express();
        const cors = require('cors');
        const mysql = require('mysql');
        const bodyParser = require('body-parser');

        app.use(bodyParser.urlencoded({extended: false}));
        app,use(bodyParser.json());

        '
30. Now after making all this changes , we are going to the fron end and build the form, in the app.js
*/