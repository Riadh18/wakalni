const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const User = require('../Models/User');


exports.signUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if (found) {
            return res.status(400).send({errors : [{msg : 'Email already exist'}]})
        }

        const newUser = new User(req.body)

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashPassword

        await newUser.save()
        
        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '168h' })

        res.status(200).send({Msg:'welcome',newUser,token})


    } catch (error) {
        res.status(500).send({errors : [{msg :'cant SignUp'}]})
    }
}


exports.signIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : 'cant login'}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{msg : 'cant login'}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '168h' })

        res.status(200).send({Msg : 'connected',found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg :'cant login'}]})
    }
}