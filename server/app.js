const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const addUser = require('./routes/addUser')
const loginUser = require('./routes/loginUser')
const authenticate = require('./middleware/authenticate')
const cors = require('cors')
const db = require('./database/connection')
const myOrders = require('./routes/myOrders')
const addOrder = require('./routes/addOrder')
const getdata = require('./routes/getData')
console.log(process.env.DB_HOST)
const PORT = 8000
// using middlewares
 app.use(express.static('public'))
 app.use(express.json())
 app.use(express.urlencoded({extended : false}))
 app.use(cookieParser())


 app.use(cors({
    origin: [ 'http://localhost:65189'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'] 
}));


 // Defining routes

 app.use('/add-user', addUser)
 app.use('/login-user',  loginUser )
 app.use('/addOrder' , authenticate , addOrder)
 app.use('/myOrders', authenticate , myOrders)
 app.use('/getData', authenticate , getdata)



 // Defining port
    app.listen(PORT , ()=>{
        console.log("app is listening ")
    })