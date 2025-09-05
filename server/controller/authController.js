const { prisma } = require("../utils/dbConnector");


exports.adminRegister= async (req,res)=>{
    //console.log(req.body);
    //res.status(300).send("Admin registered successfully");
    const {name,role,email,pass} = req.body
    try{
        const UserData = await prisma.user.create({
            data:{
                name,
                role,
                email,                
                password:pass
            }
        });
        res.status(201).send({message:'created admin',status:true,data:UserData})
    }
    catch(err){
        res.status(204).send({message:err,status:false});
    }
}

exports.adminLogin=(req,res)=>{
    console.log(req.body);
    res.status(200).send("Admin logged in successfully");
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