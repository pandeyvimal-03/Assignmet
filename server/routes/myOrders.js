const express = require('express')
const router = express.Router();
const OrdersModel = require('../database/models/orders')


router.get('/', async(req, res)=>{

    try {

        const orders = await OrdersModel.find({user : req.user.id})
        res.status(200).json({success : true , message : "Your order is ready" , orders : orders})

    } catch (error) {
        
        return res.status(500).json({success: false , message : "Unable to fetch due to internal issues"})
    }
  
})

module.exports = router