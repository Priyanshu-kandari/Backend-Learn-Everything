const {body,validationResult} = require('express-validator');

const validateResult = async(req,res,next) =>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }

    next()
}

const registerUserValidationRules = [
    body('username')
    .isString()
    .withMessage("username must be a string")
    .isLength({min:3 , max:20})
    .withMessage("username must be between 3-20 character"),
    validateResult
]

module.exports = {registerUserValidationRules}