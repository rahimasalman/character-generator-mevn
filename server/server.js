require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected Successfully!'));

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send('HELLO WORLD!');
});

server.listen(3000, ()=> console.log("Serving on port 3000!"))