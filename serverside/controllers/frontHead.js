const FrontHead = require('../models/frontHeadModel');
const login = require('../models/logInModel');
const token = require('../models/tokenModel');
const { errorResponse } = require('../utils/errorResponse');
const { successResponse } = require('../utils/successResponse');
const PostService = require('../services/PostService');


exports.FrontHead = function (req, res) {
    res.send("Hello is is front heads")
}
// to login user
exports.loginUser = async (req,res)=>{
    let user = new login({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user = await user.save()
    if(user===""){
       errorResponse(res,400,'Login failed.');
    }
    successResponse(res,200,user,'Login successfully.');
}
// to post details about 
exports.postFrontHead = async (req, res) => {
    const createPost = new PostService();
    createPost.postUser(req, res);
}


//  to get userdata
exports.getUser = async (req, res) => {
    const user = await FrontHead.find()
    if (!user) {
        return res.status(400).json({ error: 'Error in getting data' })
    }
    res.status(200).send(user)
}

// to update user data
exports.updateUser = async (req, res) => {
    const user = await FrontHead.findByIdAndUpdate(req.params.id, {
        about: req.body.about,
        email: req.body.email
    },
        { new: true })
    if (!user) {
        return res.status(400).json({ error: 'Failed to update data' })
    }
    res.status(200).send(user)
}

// to get single userlist
exports.getSingleUser = async (req, res) => {
    const user = await FrontHead.findById(req.params.id)
    if (!user) {
        return res.status(400).json({ error: 'Error in getting data' })
    }
    res.status(200).send(user)
}

// to delete user from collection
exports.deleteuser = async (req, res) => {
    const user = await FrontHead.findByIdAndDelete(req.params.id)
    if (!user) {
        return res.status(400).json(
            {
            statuscode: 400,
               data:{ 
                message: 'Error while deleting user.',
            }
            }
        )
    }
    res.status(200).send("User deleted successfully")
}