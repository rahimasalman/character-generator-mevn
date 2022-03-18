require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send('HELLO WORLD!');
});

server.listen(3000, ()=> console.log("Serving on port 3000!"))