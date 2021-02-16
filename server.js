'use strict';

//***** Create server *****//
const express = require('express');
require('dotenv').config();

//***** Setup Application Server *****//
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

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
app.listen(PORT, console.log(`We are up on ${PORT}`));