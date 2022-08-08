const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    hashedPassword:{
        type: String,
        require: true,
    },
    role:{
        type: String,
        require: true
    }
},{
    timestampes: true,
})

module.exports = mongoose.model('User',userModel)