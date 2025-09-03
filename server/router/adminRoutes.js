const express = require('express');
const router = express.Router();
const authController =  require('../controller/authController');
const {adminRegister, adminLogin, addMovie, addGenre, changePassword, viewMovies, editMovie} = authController;

router.post('/register', adminRegister);
router.post('/login', adminLogin);
router.post('/addMovie', addMovie);
router.post('/genre', addGenre);
router.post('/changePass', changePassword);
router.post('/viewMovies', viewMovies);
router.post('/editMovie', editMovie);

module.exports = router;