const mongoose = require('mongoose')

const orderSchema =  new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myUser'

    },
    name : {
        type : String,
        required : true
    },
    category : {
        type : String
    },
    price : {
        type : Number
    }

})

const orders = mongoose.model('orders' , orderSchema)
module.exports = orders