const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DB_URI)
        console.log(`connected to mongodb : ${conn.connection.host}`);
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB