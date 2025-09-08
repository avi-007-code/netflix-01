const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const { userRegister,userLogin,viewAllMovies, viewAllGenres, moviesByGenre, viewMovie, giveRating, searchMovies } = userController;
const {verifyUser} = userAuthMiddleware;


router.post('/register',userRegister);
router.post('/login',userLogin);
router.post('/viewAllMovies',viewAllMovies);
router.post('/viewAllGenres',verifyUser,viewAllGenres);
router.post('/movies/:genre',verifyUser,moviesByGenre);
router.post('/viewMovie/:id',verifyUser,viewMovie);
router.post('/rating/:id',verifyUser,giveRating);
router.post('/search/:movie',verifyUser,searchMovies);

module.exports = router;