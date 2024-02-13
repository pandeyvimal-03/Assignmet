const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Username:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
        
    },
    password:{
        type: String,
        required: true
    }
})

const myUser = mongoose.model('myUser', userSchema);
module.exports = myUser;
