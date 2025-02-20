
import express from 'express';
import { body } from 'express-validator';
import { registerUser,loginUser } from '../controllers/user.controller.js'; 

const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  registerUser
);
router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
  loginUser
)

// router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

// router.get('/logout', authMiddleware.authUser, userController.logoutUser)



export default router;
