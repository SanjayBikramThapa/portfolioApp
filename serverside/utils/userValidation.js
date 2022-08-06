// joi validation
const joi = require ('joi');
const {errorResponse} = require('../utils/errorResponse');

const validation = joi.object({
    name: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required().email(),
    password: joi.string().min(6).max(30).required()
})

const userValidation = async (req, res, next) => {
	const payload = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	const { error } = validation.validate(payload);
	if (error) {
	errorResponse(res,400,`${error.message}`)
	} else {
		next(); 
	}
};
module.exports = userValidation;