const express = require('express')
const { signUp, signIn, getUsers } = require('../Controllers/User')
const isAuth = require('../Middlewares/isAuth')
const { registerValidation, Validation, logginValidation } = require('../Middlewares/Validator')

const userRouter = express.Router()


userRouter.post('/SignUp',registerValidation,Validation,signUp)
userRouter.post('/SignIn',logginValidation,Validation,signIn)
userRouter.get('/currentUser',isAuth,(req,res)=>res.send(req.user))
userRouter.get('/getUsers',getUsers)



module.exports = userRouter