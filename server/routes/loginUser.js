const express = require('express')
const router = express.Router()
const {check , validationResult} = require('express-validator')
const user = require('../controller/user')

const validate = [
    
    check('phone').isMobilePhone('en-IN').withMessage('Invalid phone number'),
    check('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
]

router.post('/', validate ,  (req, res)=>{

     const errors = validationResult(req)

     if(!errors.isEmpty()){
       return res.status(400).json({success : false , message : "user not found"})
     }

    user.checkUser(req , res);

})

module.exports = router;