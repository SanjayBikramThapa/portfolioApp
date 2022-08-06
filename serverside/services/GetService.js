const User = require('../models/authModel');
exports.getUser = async(req,res) =>{
    const user = await User.findOne({email:req.email}).lean(true)
    return user
}