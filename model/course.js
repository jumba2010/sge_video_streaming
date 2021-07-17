const mongoose=require('mongoose');

const courseSchema=new mongoose.Schema({
    name:{type:String,required:true},
    link:{type:String,required:true},
    url:{type:String,required:true},
    urls:{type:Array},
    creationDate:{type:Date,required:true,default:Date.now()},
    normalizedName:{type:String,required:true},
    active:{type:Boolean,required:true,default:true},
    createdBy:{type:String,required:true}  
    })
    
    
const Course=mongoose.model('Course',courseSchema);
module.exports=Course;
