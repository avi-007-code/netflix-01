const express = require('express');
const { userRegister, userLogin } = require('../controller/authController');
const { viewAllMovies, viewAllGenres, moviesByGenre, viewMovie, giveRating, searchMovies } = require('../controller/userController');
const { verifyToken } = require('../middleware/authenticateMiddleware');

const router = express.Router();

router.post('/register',userRegister);
router.post('/login',userLogin);
router.get('/viewAllMovies',viewAllMovies);        
router.get('/viewAllGenres',viewAllGenres);     
router.get('/moviesByGenre/:genre',moviesByGenre);
router.get('/viewMovie/:id',viewMovie);
router.post('/rating/:id',verifyToken,giveRating);             // have to check this one
router.get('/search/:movie',searchMovies);

module.exports = router;