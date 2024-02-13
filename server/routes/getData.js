const express = require('express')
const router = express.Router();
const data = require('../demoData/data')



router.get('/', (req , res)=>{
    console.log("we are in getdata folder")
    res.json({success : true , data : data })
})

module.exports = router