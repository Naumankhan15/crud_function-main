import express from 'express';
import  controller  from './controller.js';
const userRouter = express.Router();
import { body }  from "express-validator";
import { adminVerification, tokenverification } from '../middleware/auth.js';


userRouter.post("/signup",
body('firstname').isLength({min:3, max:50}).trim().withMessage('firstname is required'),
body('lastname').isLength({min:3, max:50}).trim().withMessage('lastname is required'), 
body('email').isEmail().isLength({min:8, max:50}).trim().withMessage('Write email like :- example@gmail.com'),
body('username').isLength({min:3, max:50}).trim().withMessage('username is required'),
body('password').matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).withMessage('Must password have 8 characters, at least 1 upper case and 1 lowercase letter, and at least one number and 1 special character.'),
body('role').exists().trim().withMessage('role is required'),
controller.signUp)

userRouter.post("/login",
body('email').isEmail().isLength({min:8, max:50}).trim().withMessage('Write email like :- example@gmail.com'),
body('password').matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).withMessage('Must password have 8 characters, at least 1 upper case and 1 lowercase letter, and at least one number and 1 special character.'),
controller.signIn)

userRouter.post("/update-password-by/old-password",
tokenverification,
body('oldPassword').exists().isLength({ min: 6 }).trim().withMessage('old password is required'),
body('newPassword').matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).withMessage('Must password have 8 characters, at least 1 upper case and 1 lowercase letter, and at least one number and 1 special character.'),
controller.updatePassByoldPass)


// userRouter.patch("/update-user",
// tokenverification,
// controller.updateUser)


userRouter.get("/logout",
tokenverification,
controller.Logout)



export default userRouter;