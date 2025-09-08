const { prisma } = require("../utils/dbConnector");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.viewAllMovies = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      include: { genre: true }
    });
    res.status(200).send({ movies });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};


exports.viewAllGenres = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany({
      // include: {
      //   movies: true
      // }
    });
    res.status(200).send({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error retrieving genres' });
  }
};

exports.moviesByGenre = async (req, res) => {
  try {
    const { genre } = req.params;               // pass the genre name in the url for testing..!!
    const genreData = await prisma.genre.findFirst({
      where: { name: genre },
      include: { movies: true }
    });
    if (!genreData) return res.status(404).send({ message: "Genre not found" });
    res.send({ genre: genreData.name, movies: genreData.movies });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};


exports.viewMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await prisma.movies.findUnique({
      where: { id },
      include: { genre: true }
    });
    if (!movie) return res.status(404).send({ message: "Movie not found" });
    res.send({ movie });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};


exports.giveRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { score } = req.body;
    const userId = req.user.id;

    if (score < 1 || score > 10) return res.status(400).send({ message: "Invalid rating" });

    const movie = await prisma.movies.findUnique({ where: { id } });
    if (!movie) return res.status(404).send({ message: "Movie not found" });

    await prisma.rating.create({
      data: { movieId: id, userId, score }
    });

    res.send({ message: "Rating submitted successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// exports.searchMovies = (req, res) => {
//     console.log(req.body);
//     const param = req.query.name;
//     res.send({message:`Movies in genre: ${param}`});
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
    res.send({ movies });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
