const express = require('express');
const { addMovie, addGenre, viewMovies, editMovie, viewAllUsers, viewGenre } = require('../controller/adminController');
const { verifyAdmin } = require('../middleware/authenticateMiddleware');
const { adminRegister, adminLogin, adminChangePass } = require('../controller/authController');
const router = express.Router();

router.post('/register',adminRegister);
router.post('/login', adminLogin);  
router.get('/viewAllUsers',verifyAdmin,viewAllUsers);      // middleware passed 
router.post('/addMovie',verifyAdmin, addMovie);     
router.post('/addGenre',verifyAdmin, addGenre);
router.get('/viewGenre',viewGenre);
router.patch('/adminChangePass',verifyAdmin, adminChangePass);                      // need to verify this and try it
router.get('/viewMovies',viewMovies);     
router.put('/editMovie',verifyAdmin, editMovie);       // need to verify this and try it

module.exports = router;