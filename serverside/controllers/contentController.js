const { postContent, updateContents, getContents } = require('../services/PostService')
const { errorResponse } = require('../utils/errorResponse')
const { successResponse } = require('../utils/successResponse')
const contentModel = require('../models/contentModel')
const { getUser } = require('../services/GetService')
// post content 
exports.addContent = async (req, res) => {
    try{
        let content = await postContent(req.body)
        let email = req.body.email
        console.log("email",email)
        let content_email = await contentModel.findOne({email:email})
        console.log("here is content_email",content_email)
        if(content_email){
            if(content_email.email === email){
                console.log("here is content_email",content_email.email)
                return errorResponse(res,400,"Sorry,you have already posted content")
            }
        }
            await content.save()
            return successResponse(res,200,content,'Data added successfully')

    }catch(err){
        return errorResponse(res,400,"Sorry,Email doesn't match failed to add data")
    }
}
// update content
exports.updateContent = async (req, res) => {
    const content =  await updateContents(req)
    if(!content){
        return errorResponse(res,400,"content not found")
    }
    successResponse(res,200,"content updated successfully")
}

// get content
exports.getContents = async(req,res) =>{
    const content = await contentModel.find()
    if(!content){
        return errorResponse(res,400,"content not found")
    }
    successResponse(res,200,content,"content found")
}

// delete content
exports.deleteContent = async(req,res) =>{
    const content = await contentModel.findByIdAndRemove(req.params.id)
    if(!content){
        return errorResponse(res,400,"content not found")
    }
    successResponse(res,200,"content deleted successfully")
}