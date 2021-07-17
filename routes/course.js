const Joi=require('joi');
const express=require('express');
const Course=require('../model/course');
const router=express.Router();

 const schema={
        title:Joi.string().min(1).required() 
    };

router.post('/', async (req,res)=>{
    const {name, link, url,urls,createdBy}=req.body; 
    let normalizedName=name.split(" ").join("").toLowerCase()
    let course=new Course({name,normalizedName, link, url,urls,createdBy});
    course=await course.save()
    res.send(course);
});

router.put('/:id', async (req,res)=>{
     const {name, link, url,urls}=req.body;    
     const result=await Course.findByIdAndUpdate(req.params.id,{
        $set:{
            name:name,
            link:link,
            url:url,
            urls:urls,
            normalizedName:name.split(" ").join("").toLowerCase(),
        }
    },{new:true});   

    res.send(result);
});

router.put('/inactive/:id', async (req, res) => {

    const result = await Course.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            active: false
        }   
    });

    res.send(result);
});

router.get('/', async (req,res)=>{
    const courses =await Course.find({active: true }).sort({creationDate:-1});
    res.send(courses);
});

router.get('/:name', async (req,res)=>{
    const courses =await Course.find({active: true,normalizedName:req.params.name }).sort({creationDate:-1});
    res.send(courses);
});

module.exports=router;