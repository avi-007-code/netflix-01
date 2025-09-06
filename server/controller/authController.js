// const { prisma } = require("../utils/dbConnector");
// const bcrypt = require("bcryptjs"); // for password hashing
// const jwt = require("jsonwebtoken");

// require('dotenv').config()

// exports.adminRegister= async (req,res)=>{
//     // console.log(req.body);
   
//     const {name,role,email,pass} = req.body

//     // 2. Hash password
//     const hashedPassword = await bcrypt.hash(pass, 10);  //10 salts hashing
//     try{
//         const UserData = await prisma.User.create({
//             data:{
//                 name,
//                 role,
//                 email,                
//                 pass:hashedPassword 

//             }
//         });
//         res.status(201).send({ name, role, email, password: hashedPassword });

//     }
//     catch(err){
//         res.status(500).send({message:err || "failed to create admin",status:false});
//     }
// }

// exports.adminLogin= async (req,res)=>{
//     const {email,pass} = req.body;
//     try{
//     const validUser = await prisma.User.findFirst({where:{email:email,role:'admin'}});
//     if(!validUser) res.status(400).send({message:`User Does'nt exist`});
//     const validPass =await bcrypt.compare(pass,validUser.pass);
//     if(!validPass) res.status(400).send({message:`Wrong Password`});
//     //we will generate token here and send it as response
//     const token = jwt.sign(
//         {id:validUser.id,email:email,role:'admin'},
//         process.env.JWT_SECRET_TOKEN,
//         {expiresIn:'6h'});
//     res.status(200).send({message:`Login Successful`,token:token});
//     }catch(err){ 
//         res.status(400).send({message:err});

//     }
// }

// exports.userRegister = async (req,res)=>{
//     const {name,email,pass} = req.body;
//     try{
//     const Userdata = await prisma.User.create({data:{name,email,pass,role:'user'}});
//     res.status(201).send({status:true,message:Userdata});
//     }catch(err){
//             res.status(204).send({status:false,message:err});
//     }
    
// }

// //// have to create middleware for changing password!!

// exports.addMovie=(req,res)=>{
//     console.log(req.body);
//     res.status(201).send("Movie added successfully");
// }

// exports.addGenre=(req,res)=>{
//     console.log(req.body);
//     res.status(201).send("Genre added successfully");
// }

// exports.deleteMovie=(req,res)=>{
//     console.log(req.body);
//     res.status(200).send("Movie deleted successfully");
// }

// exports.changePassword=(req,res)=>{
//     console.log(req.body);
//     res.status(200).send("Password changed successfully");
// }   

// exports.viewMovies=(req,res)=>{
//     console.log(req.body);
//     res.status(200).send("Movies retrieved successfully");
// }

// exports.editMovie=(req,res)=>{
//     console.log(req.body);
//     res.status(201).send("Movie edited successfully");
// }


const {prisma }= require('../utils/dbConnector');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.adminRegister= async (req,res)=>{
    const {name,role,email,pass} = req.body
    const hashPassword = await bcrypt.hash(pass,10)//10 salts of hashing
    try{
    const UserData  = await prisma.User.create({
        data:{
            name,
            email,
            role,
            pass:hashPassword
        }
    });
    res.status(201).send({message:'created admin',status:true,data:UserData})
    }catch(err){
       res.status(400).send({message:err,status:false})
       console.log(err)
    }  
}
exports.adminLogin= async (req,res)=>{
    const {email,pass} = req.body;
    try{
    const validUser = await prisma.User.findFirst({where:{email:email,role:'admin'}});
    if(!validUser) res.status(400).send({message:`User Does'nt exist`});
    const validPass =await bcrypt.compare(pass,validUser.pass);
    if(!validPass) res.status(400).send({message:`Wrong Password`});
    //we will generate token here and send it as response
    const token = jwt.sign(
        {id:validUser.id,email:email,role:'admin'},
        process.env.JWT_SECRET_TOKEN,
        {expiresIn:'6h'});
    res.status(200).send({message:`Login Successful`,token:token});
    }catch(err){ 
        res.status(400).send({message:err});

    }
}
exports.userLogin = (req,res)=>{
  console.log(req.body)
  res.status(201).send({status:true});
}
exports.userRegister = async (req,res)=>{
    const {name,email,pass} = req.body;
    try{
    const Userdata = await prisma.User.create({data:{name,email,pass,role:'user'}});
    res.status(201).send({status:true,message:Userdata});
    }catch(err){
            res.status(204).send({status:false,message:err});
    }
    
}
exports.adminChangePass = async (req,res)=>{
    const adminId = req.params.id;
    const {newPass} = req.body;
    console.log(newPass);
    try{
        const updateData = await prisma.User.update({
         where:{id:adminId},
         data:{pass:newPass}
        })
         res.status(201).send({status:true,message:updateData});
    }catch(err){
         res.status(400).send({status:false,message:err});
    }
}

exports.addMovie=(req,res)=>{
    console.log(req.body);
    res.status(201).send("Movie added successfully");
}

exports.addGenre=(req,res)=>{
    console.log(req.body);
    res.status(201).send("Genre added successfully");
}

exports.deleteMovie=(req,res)=>{
    console.log(req.body);
    res.status(200).send("Movie deleted successfully");
}

exports.changePassword=(req,res)=>{
    console.log(req.body);
    res.status(200).send("Password changed successfully");
}   

exports.viewMovies=(req,res)=>{
    console.log(req.body);
    res.status(200).send("Movies retrieved successfully");
}

exports.editMovie=(req,res)=>{
    console.log(req.body);
    res.status(201).send("Movie edited successfully");
}