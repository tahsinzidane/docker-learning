const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db')

db();

app.get('/', (req, res)=>{
    res.send("hello world");
});

const port = 5000 || process.env.PORT
app.listen(port, ()=>{
    console.log('server running on ', port);
})