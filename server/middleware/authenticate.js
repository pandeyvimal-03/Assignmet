const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
  dotenv.config()
  

const authenticate = async (req, res, next) => {
       const key = process.env.TOKEN
       const token = req.cookies.token;
    
    if (!token) {
       return res.status(400).json({ success: false, message: " user not hai authenticated" })
    }

    try {

        const user = jwt.verify(token, key)
        req.user = user;
        
        next();

    } catch (error) {
        return res.status(400).json({ success: false, message: "user not hota authenthicated" })
    }

}

module.exports = authenticate;