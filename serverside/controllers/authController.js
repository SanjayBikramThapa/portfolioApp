const { postUser } = require('../services/PostService');
const Token = require('../models/tokenModel');
const sendMail = require('../utils/setEmails');
const { errorResponse } = require('../utils/errorResponse');
const crypto = require('crypto');
const { successResponse } = require('../utils/successResponse');
const User = require('../models/authModel');
const jwt = require('jsonwebtoken');

// register user and send email confirmation link
exports.registerUser = async (req,res) => {
    try {
        const exittingUser = await User.findOne({ email: req.body.email }).lean(true);
        if (exittingUser) {
            return errorResponse(res, 400, 'User already exists')
        } else {
            let user = await postUser(req.body)
            if (user) {
                successResponse(res, 200, user, 'User created successfully')
                let token = new Token({
                    userId: user._id,
                    token: crypto.randomBytes(16).toString('hex')
                })
                token = await token.save()
                if (!token) {
                    return errorResponse(res, 400, 'Error in creating token')
                }
    
                sendMail({
                    from: 'no-reply@server.com',
                    to: user.email,
                    subject: 'Email verification Link',
                    text: `Hello, \n\n Please confirm your email by copying the link :\n\n http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}`,
                })
            } else {
                return errorResponse(res, 400, 'Something went wrong')
            }
        }
    } catch (error) {
        return errorResponse(res, 400, error)
    }
  

}

// post email confirmation link
exports.postEmailConfiramtion = async (req, res) => {
    Token.findOne({
        token: req.params.token
    }, (error, token) => {
        if (error || !token) {
            return errorResponse(res, 400, 'Invalid Token or expired token')
        }
        // if token found then valid user token and update user isVerified field to true
        User.findOne({ _id: token.userId }, (error, user) => {
            if (!user || error) {
                return errorResponse(res, 400, 'we are unable to find the valid user for this token')
            }
            // check if user is already verified
            if (user.isVerified) {
                return errorResponse(res, 400, 'User has been already verified')
            } else {
                // save the verified user
                user.isVerified = true;
                user.save((error) => {
                    if (error) {
                        return errorResponse(res, 400, 'error in saving user')
                    }
                    res.json({ message: 'User verified successfully' })
                })
            }
        })
    })
}

// for sign in
exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        // find user by email
        const user = await User.findOne({ email })
        if (!user) {
            return errorResponse(res, 400, 'User not found')
        }
        // if email is found then check if password is correct
        if (!user.authenticate(password)) {
            return errorResponse(res, 400, 'email and password doesnot match.')
        }
        // check user is verified or not
        if (!user.isVerified) {
            return errorResponse(res, 400, 'User is not verified')
        }
        // if user is verified then create token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // save token in cookie
        res.cookie('token', token, { expire: Date.now() + 99999 });
        // return response frontend
        const { _id, name, role } = user;
        return res.json({ token, user: { _id, email, name, role } })
    } catch (error) {
        return errorResponse(res, 400, error)
    }
}

// user signout
exports.signOut = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'User signed out successfully' })
}

// forgot password
exports.forggotPassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return errorResponse(res, 400, 'Sorry the email you enterd is not registerd with us')
    }
    let token = new Token({
        userId: user._id,
        token: crypto.randomBytes(16).toString('hex')
    })
    token = await token.save()
    if (!token) {
        return errorResponse(res, 400, 'Error in creating token')
    }
    // send email to user with token
    sendMail({
        from: 'sanjay@gmail.com',
        to: user.email,
        subject: 'Password Reset Link',
        text: `Hello, \n\n Please reset your password by copying the link :\n\n http:\/\/${req.headers.host}\/api\/resetpassword\/${token.token}`,
    })
    return successResponse(res, 200, 'Email has been sent to your email')
}

// password reset
exports.resetPassowrd = async (req, res) => {
    let token = await Token.findOne({ token: req.params.token })
    try {
        if (!token) {
            return errorResponse(res, 400, 'Invalid Token or expired token')
        }
        let user = await User.findOne({
            email: req.body.email,
            _id: token.userId
        })
        if (!user) {
            return errorResponse(res, 400, 'We are unable to find the valid user for this token.')
        }
        const password = req.body.password;
        user = await user.save()
        if (!user) {
            return errorResponse(res, 400, 'failed to reset password')
        }
    } catch (error) {
        return errorResponse(res, 400, 'failed to reset password')
    }
    successResponse(res, 200, 'Password reset successfully')
}

// user delete
exports.deleteUser = (req, res) => {
    try {
        User.findByIdAndRemove(req.params.id).then(async(user) =>{
            console.log(user)
            if(!user){
                return errorResponse(res, 400, 'User not found')
            }
            return successResponse(res, 200, 'User deleted successfully')
        })
    } catch (error) {
        return errorResponse(res, 400, error)
    }
}
