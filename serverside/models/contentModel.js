const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const contentSchema =  new mongoose.Schema({
    about:{
        type:String,
        required:true,
        trim:true
    },
    contact:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    contentId:{
        type:ObjectId,
        ref:'Auth',
        required:true
    },
    email:{
        type:String,
        required:true,
    }
},{timestamps:true});
module.exports = mongoose.model('Content',contentSchema);