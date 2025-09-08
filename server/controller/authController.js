
const { prisma }= require('../utils/dbConnector');
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
       //console.log(err)
    }  
}
exports.adminLogin= async (req,res)=>{
    const {email,pass} = req.body;
    try{
      const validUser = await prisma.User.findFirst({where:{email:email,role:'admin'}});
      if(!validUser) res.status(400).send({message:`User Doesn't exist`});
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

exports.addMovie = async (req, res) => {
  try {
    const { title, desc, year, url, bannerUrl, rating, genreId } = req.body;

    const movie = await prisma.movies.create({
      data: {
        title,
        desc,
        year,
        url,
        bannerUrl,
        rating,
        genre: { connect: { id: genreId } }, // connect to existing genre
      },
      include: { genre: true },
    });

    res.json({ message: "Movie added successfully", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addGenre = async (req, res) => {
  try {
    const { name } = req.body;

    const genre = await prisma.genre.create({
      data: { name },
    });

    res.status(201).json({ message: "Genre created successfully", genre });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.deleteMovie=(req,res)=>{

//     console.log(req.body);
//     res.status(200).send("Movie deleted successfully");
// }

exports.changePassword = async (req, res) => {
  try {
    const { userId, oldPassword, newPassword } = req.body;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const validPass = await bcrypt.compare(oldPassword, user.password);
    if (!validPass) return res.status(400).json({ error: "Old password incorrect" });

    const hashedPass = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPass },
    });

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.viewMovies = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      include: { genre: true }, // include genre details
    });

    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editMovie = async (req, res) => {
  try {
    const { id, title, desc, year, url, bannerUrl, rating, genreId } = req.body;

    const movie = await prisma.movies.update({
      where: { id },
      data: {
        title,
        desc,
        year,
        url,
        bannerUrl,
        rating,
        genre: genreId ? { connect: { id: genreId } } : undefined,
      },
      include: { genre: true },
    });

    res.json({ message: "Movie updated successfully", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};