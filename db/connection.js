const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.DB_STRING

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('db connected successfully')
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDB