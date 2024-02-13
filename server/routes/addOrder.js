const express = require('express')
const router = express.Router();
const orders = require('../database/models/orders')

router.post('/', async(req, res)=>{
    
    const {name , category , price} = req.body
    
       try {
            const newOrder = orders.create({user : req.user.id , name : name , category : category , price : price})
            return res.status(200).json({success : true , message : "added order succesfully" })
        } catch (error) {
             return res.status(500).json({success : false , message : "Due to some internal issue order did'nt added "})
        }
        
    })


module.exports = router