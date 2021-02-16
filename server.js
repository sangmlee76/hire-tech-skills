'use strict';

//***** Create server *****//
const express = require('express');
require('dotenv').config();
const pg = require('pg');

//***** Setup Application Server *****//
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);

//***** Global Variables *****//
const PORT = process.env.PORT || 3111;

//***** Routes *****//
app.get('/', proofOfLife);

//***** Route Callbacks *****//
function proofOfLife(req, res) {
  res.send('Hello, let\'s do this!');
}

//***** Helper Functions *****//


//***** Start Server *****//
client.connect().then(() => {
  app.listen(PORT, console.log(`We are up on ${PORT}`));
}).catch(err => console.error(err));