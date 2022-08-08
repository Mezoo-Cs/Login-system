const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')

// @des         get all user
// @rout        GET /user/all
// @access      private
const getAllUser = asyncHandler(async (req,res)=>{

    const allUsers = await User.find();

    res.json({
        msg : "get All user",
        allUsers
    })
})

// @des         get user
// @rout        GET /user/:id
// @access      publice
const getUser = asyncHandler(async (req,res)=>{

    const {id} = req.params;

    if(id){
        const user = await User.findById(id)

        return res.json({
            msg : "get user",
            user
        })
    }else{
        return res.json({
            msg : "enter the req"
        })
    }
})

// @des         set new user
// @rout        POST /user
// @access      publice
const postUser = asyncHandler(async (req,res)=>{
    const {name, email , password , role} = req.body;

    if(name && email && password && role){
        const user = await User.create({name, email , hashedPassword: password , role})

        return res.json({
            msg : "post user",
            user
        })
    }else{
        return res.json({
            msg : "enter the req"
        })
    }

})

// @des         update user
// @rout        PUT /user/:id
// @access      private
const updateUser = asyncHandler(async (req,res)=>{
    const {id} =  req.params
    const {updates} = req.body

    const user = await User.updateOne(await User.findById(id) , {...updates});

    res.json({
        msg : "update user",
        user
    })
})

// @des         delete user
// @rout        DELETE /user/:id
// @access      private
const deleteUser = asyncHandler(async (req,res)=>{
    
    const {id} = req.params;

    if(id){
        const user = await User.deleteOne(await User.findById(id))

        return res.json({
            msg : "delete user",
            user
        })
    }else{
        return res.json({
            msg : "enter the req"
        })
    }
})

module.exports = {
    getAllUser,
    getUser,
    postUser,
    updateUser,
    deleteUser
}