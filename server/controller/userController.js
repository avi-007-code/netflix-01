const e = require("express");

exports.userRegister=(req,res)=>{
    console.log(req.body);
    res.status(201).send("User registered successfully");
}

exports.userLogin=(req,res)=>{
    console.log(req.body);
    res.status(200).send("User logged in successfully");
}

exports.viewAllMovies=(req,res)=>{
    console.log(req.body);
    res.status(200).send("All movies retrieved successfully");
}

exports.viewAllGenres=(req,res)=>{
    console.log(req.body);
    res.status(200).send("All genres retrieved successfully");
}

exports.moviesByGenre = (req, res) => {
    console.log(req.body);
    const param = req.query.name;
    res.json({message:`Movies in genre: ${param}`});
    //res.status(200).send("Movies by genre fetched successfully");

    //console.log(req.query.name);
}

exports.viewMovie = (req, res) => {
    console.log(req.body);
    res.status(200).send("Movie retrieved successfully");
}

exports.giveRating = (req, res) => {
    console.log(req.body);
    res.status(200).send("Rating submitted successfully");
}

exports.searchMovies = (req, res) => {
    console.log(req.body);
    const param = req.query.name;
    res.json({message:`Movies in genre: ${param}`});
    //res.status(200).send("Search results retrieved successfully");
}