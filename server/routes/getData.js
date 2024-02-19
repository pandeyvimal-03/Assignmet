const express = require('express')
const router = express.Router();
const data = require('../demoData/data')



router.get('/', (req , res)=>{
    
    res.json({success : true , data : data })
})

module.exports = router