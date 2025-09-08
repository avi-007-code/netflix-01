const { prisma } = require("../utils/dbConnector");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.userRegister= async (req,res)=>{
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
    res.status(201).send({message:'created user',status:true,data:UserData})
    }catch(err){
       res.status(400).send({message:err,status:false})
       //console.log(err)
    }  
}

exports.userLogin= async (req,res)=>{
    const {email,pass} = req.body;
    try {

        // checking valid user through email & role
        const validUser = await prisma.User.findFirst({where:{email:email,role:"user"}});
        if(!validUser) res.status(400).send({message:`invalid user`})

        // checking password
        const validPass = await bcrypt.compare(pass,validUser.pass);
        if(!validPass) res.status(400).send({message:`invalid password`});

        // generating token
        const token = jwt.sign(
            {id:validUser.id,email:email,role:'user'},
            process.env.JWT_SECRET_TOKEN,
            { expiresIn: "6h" }
        );
        res.status(200).json({message:"Login Successfull",user:validUser.name,token:token});        
    } catch (err) {
        res.status(400).send({message:err});
        
    }
}

exports.viewAllMovies = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      include: { genre: true }
    });
    res.status(200).json({ movies });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.viewAllGenres = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany({
      include: {
        movies: true
      }
    });
    res.status(200).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving genres' });
  }
};

// exports.moviesByGenre = (req, res) => {
//     console.log(req.body);
//     const param = req.query.name;
//     res.json({message:`Movies in genre: ${param}`});
//     //res.status(200).send("Movies by genre fetched successfully");

//     //console.log(req.query.name);
// }
exports.moviesByGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const genreData = await prisma.genre.findFirst({
      where: { name: genre },
      include: { movies: true }
    });
    if (!genreData) return res.status(404).json({ message: "Genre not found" });
    res.json({ genre: genreData.name, movies: genreData.movies });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.viewMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await prisma.movies.findUnique({
      where: { id },
      include: { genre: true }
    });
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json({ movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.giveRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { score } = req.body;
    const userId = req.user.id;

    if (score < 1 || score > 10) return res.status(400).json({ message: "Invalid rating" });

    const movie = await prisma.movies.findUnique({ where: { id } });
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    await prisma.rating.create({
      data: { movieId: id, userId, score }
    });

    res.json({ message: "Rating submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// exports.searchMovies = (req, res) => {
//     console.log(req.body);
//     const param = req.query.name;
//     res.json({message:`Movies in genre: ${param}`});
//     //res.status(200).send("Search results retrieved successfully");
// }
exports.searchMovies = async (req, res) => {
  try {
    const { movie } = req.params;
    const movies = await prisma.movies.findMany({
      where: {
        title: {
          contains: movie,
          mode: 'insensitive'
        }
      },
      include: { genre: true }
    });
    res.json({ movies });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
