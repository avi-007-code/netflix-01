const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { userRegister,userLogin,viewAllMovies, viewAllGenres, moviesByGenre, viewMovie, giveRating, searchMovies } = userController;


router.post('/register',userRegister);
router.post('/login',userLogin);
router.post('/viewAllMovies',viewAllMovies);
router.post('/viewAllGenres',viewAllGenres);
router.post('/movies/:genre',moviesByGenre);
router.post('/viewMovie/:id',viewMovie);
router.post('/rating/:id',giveRating);
router.post('/search/:movie',searchMovies);

module.exports = router;