const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./config/database');
const router = require('./routes');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 8000;



const corsOption = {
    origin: ['http://localhost:3000', 'http://localhost:3001', process.env.FRONTEND_URL],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
}

connectDb();

//middleware
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router)



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})