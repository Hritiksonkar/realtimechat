const mongoose = require('mongoose');
require('dotenv').config();


const connectDb = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri || mongoUri === "your_mongodb_connection_string_here") {
            throw new Error('MONGO_URI is not defined or using placeholder in .env file');
        }
        const conn = await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        })
        console.log(`Mongodb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Mongodb connection error : ${error}`)
        process.exit(1);
    }
}


module.exports = connectDb;