const express = require('express');
const { registerUser, postEmailConfiramtion ,signIn,signOut,forggotPassword,resetPassowrd, deleteUser} = require('../controllers/authController');
const { responseComment } = require('../services/resService');
const userValidation = require('../utils/userValidation');


 const router  =  express .Router();

 router.post('/register',userValidation,registerUser) 
 router.post('/confirmation/:token',postEmailConfiramtion)
 router.post('/signin',signIn)
 router.post('/signout',signOut)
 router.post('/forgotpassword',forggotPassword)
 router.put('/resetpassword/:token',resetPassowrd)
 router.delete('/userdelete/:id',deleteUser)
 router.get('/comment',responseComment)

 module.exports = router; 