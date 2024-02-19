const mongoose = require('mongoose')
const dotenv = require('dotenv')
  dotenv.config()


const mongo_url = process.env.MONGO_URL
    


 mongoose.connect(mongo_url , {
    useNewUrlParser : true,
    useUnifiedTopology : true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console , 'MongoDB connection failed'))
db.once('open' , ()=>{
    console.log('connected')
})

module.exports = db;