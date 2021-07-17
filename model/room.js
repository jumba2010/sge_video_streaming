const mongoose=require('mongoose');

const roomSchema=new mongoose.Schema({
    name:{type:String,required:true},
    url:{type:String,required:true},
    participants:{type:Number,required:true,default:1},
    creationDate:{type:Date,required:true,default:Date.now()},
    active:{type:Boolean,required:true,default:true}, 
    })

const Room=mongoose.model('Room',roomSchema);
module.exports=Room;
