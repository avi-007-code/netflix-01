const e = require("express");

exports.adminRegister=(req,res)=>{
    console.log(req.body);
    res.status(300).send("Admin registered successfully");
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