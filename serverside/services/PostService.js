// post service for the post data
const User = require('../models/authModel');
const contentModel = require('../models/contentModel');
const { errorResponse } = require('../utils/errorResponse');
const { getUser } = require('./GetService');


exports.postUser = async (req,res) => {
    const createPost = new User({
        name: req.name,
        email: req.email,
        password: req.password
    });
    try{
     return await createPost.save();
       
    }
    catch(err){
        console.log(err);
        return false
    }
}

// post content service
exports.postContent = async(req,err) => {
    const user = await getUser(req)
    const createContent = new contentModel({
        about: req.about,
        contact: req.contact,
        address: req.address,
        email: req.email,
        contentId:user._id
    })
    try{
        return createContent
    }catch(err){
        return false
    }

}

// to update the content 
exports.updateContents =  async(req) => {
    const content =  await contentModel.findByIdAndUpdate(req.params.id,{
        about:req.body.about,
        contact:req.body.contact,
        address:req.body.address
      },{new:true})
      try{
        return content
      }catch(err){
        return false
      }
}

