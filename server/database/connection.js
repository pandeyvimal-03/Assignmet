const mongoose = require('mongoose')
  const mongo_url = 'mongodb://127.0.0.1:27017/Assignment'
    


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