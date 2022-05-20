const mongoose = require('mongoose')
const test = new mongoose.Schema({
    description: {
        type: String
    }
})
module.exports = User = mongoose.model('test', test)
