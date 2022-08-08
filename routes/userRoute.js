const express = require('express')
const router = express.Router()
const {
    getUser,
    getAllUser,
    postUser,
    updateUser,
    deleteUser } = require('../controller/userController')

//@access       private
router.get('/all',getAllUser)

//@access       publice
router.get('/:id',getUser)

//@access       publice
router.post('/',postUser)

//@access       private
router.put('/:id',updateUser)

//@access       private
router.delete('/:id',deleteUser)

module.exports = router