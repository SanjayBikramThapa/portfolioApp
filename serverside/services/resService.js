// to get data from url 
const axios = require('axios')
const { errorResponse } = require('../utils/errorResponse')
const { successResponse } = require('../utils/successResponse')
const getComments = async()=>{
    const url =  'https://jsonplaceholder.typicode.com/comments'
        return await axios.get(url)
}
exports.responseComment = async(req,res) =>{
    const response  =  await getComments()
    console.log("here is data of comments",response.data)
    try{
        if(!response.data){
            return errorResponse(res,400,"No data found")
    }
    }catch(err){
        return errorResponse(res,400,"data not found")
    }
 return successResponse(res,200,"data found",response.data)


}