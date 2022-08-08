const express = require('express')
const dotenv = require("dotenv").config()
const connectDB = require('./config/db')
const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});
app.use('/user' , require('./routes/userRoute'))

app.listen(port, ()=> console.log(`server running on port ${port}`))

module.exports = app;