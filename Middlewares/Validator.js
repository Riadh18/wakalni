const { body, validationResult } = require('express-validator')


exports.registerValidation = [
    body('email','Not a valid email').isEmail(),
    body('password','Password must contain 8 char').isLength({min : 8})
]

exports.logginValidation = [
    body('email','Not a valid email').isEmail()
    
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}