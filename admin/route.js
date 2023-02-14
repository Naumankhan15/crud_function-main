import  express from "express";
import controller from "./controller.js";
import { body } from "express-validator";


const adminRouter = express.Router();



adminRouter.post("/signup",
body('email').isEmail().trim().withMessage('Write email like :- example@gmail.com'),
body('password').isLength({ min: 6 }).withMessage('Password must be 6 character'),
body('role').exists().trim().withMessage('role is required'),
controller.SignupUser)


adminRouter.post("/signIn",
body('email').isEmail().trim().withMessage('Write email like :- example@gmail.com'),
body('password').isLength({ min: 6 }).withMessage('Password must be 6 character'),
controller.SignInUser
)


export default adminRouter;
