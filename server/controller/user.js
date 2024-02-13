
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const myUser = require('../database/models/myUser')


const hash = async (req) => {


    console.log(req.body.password)
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(req.body.password, salt)
    return newPassword;

}

const createToken = async (user) => {

    const key = "vimal"
    data = {
        id: user.id,
      
    }

    const token = jwt.sign(data, key)
    return token;

}

const registerUser = async (req, res) => {


    const name = req.body.name;
    const phone = req.body.phone;
    

    try {

        const user = await myUser.findOne({ phone: phone });
        if (user) {
           return res.status(400).json({ success: false, message: "user with similar phone number  already exists" })
        }
       
            const hashPassword = await hash(req);
            console.log(hashPassword)
            newuser = await myUser.create({ Username: name, phone: phone, password: hashPassword })
            console.log(newuser)
            const token = await createToken(newuser)

           return  res.cookie("token", token , {sameSite: 'None', secure: true,httpOnly: true,}).json({ success: true, message: "user logedin successfully" })
           

        
    } catch (error) {
         console.log(error)
       return res.status(500).json({success : false , message : "internal issue"})
        
    }

}

const checkUser = async (req, res) => {

    const phone = req.body.phone;
    const password = req.body.password;

    try {

        const user = await myUser.findOne({ phone: phone })

        if (!user) {
           return res.status(400).json({ success: false, message: "user not found" })
        }
       

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
               return res.status(400).json({ success: false, message: "user not found" })
            }
            
        const token = await createToken(user)
         return res.cookie("token", token, {sameSite: 'None', secure: true,httpOnly: true,} ).json({ success: true, message: "logedin successfully" })
            
        

    } catch (error) {
        return res.status(500).json({success : false , message : "internal issue"})
        
     }

}

module.exports = { registerUser, checkUser }
