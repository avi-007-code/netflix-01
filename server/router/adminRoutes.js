const express = require('express');
const router = express.Router();
const authController =  require('../controller/authController');
const authenticateMiddleware = require('../middleware/authenticateMiddleware');
const {adminRegister, adminLogin, addMovie, addGenre, changePassword, viewMovies, editMovie} = authController;
const {verifyAdmin} = authenticateMiddleware;

router.post('/register', adminRegister);
router.post('/login', adminLogin);         // middleware passed
router.post('/addMovie',verifyAdmin, addMovie);
router.post('/genre',verifyAdmin, addGenre);
router.post('/changePass',verifyAdmin, changePassword);
router.post('/viewMovies',verifyAdmin, viewMovies);
router.post('/editMovie',verifyAdmin, editMovie);

module.exports = router;