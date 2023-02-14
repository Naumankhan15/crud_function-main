import  express  from "express";
import { body } from "express-validator";
import contoller from "./contoller.js";
import { param } from "express-validator";
import { tokenverification } from "../middleware/auth.js";

const landlordRouter = express.Router();


landlordRouter.post("/create",
body('name').isLength({min:3, max:50}).trim().withMessage('name is required'),
body('location').isLength({min:3, max:50}).trim().withMessage('location is required'), 
body('rate').isLength({min:0, max:50}).trim().withMessage('rate is required.'),
tokenverification,
contoller.createfield)


landlordRouter.delete("/delete",
body('_id').isMongoId().withMessage('Invalid Id'),
contoller.deleteField)


landlordRouter.get("/view",
contoller.getList)


landlordRouter.get('/get-Landlord-by/:_id',
param('_id').isMongoId().withMessage('Invalid Id'),
contoller.landlordbyId)






export default landlordRouter;
