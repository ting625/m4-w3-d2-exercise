'use strict'

const express = require('express')
const helmet = require('helmet');
const app = express();

//protect the app header
app.use(helmet())

app.get('/', (req,res) => {
    console.log('route \'/\' calledz1')
    res.send({res : 'Sending 200 as response'})
});

app.listen(3000)
console.log('Express app is up and running on port 3000!')