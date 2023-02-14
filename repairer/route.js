import express from "express";
import controller from "./controller.js";
import { param,body } from "express-validator";
import { tokenverification } from "../middleware/auth.js";



const repairerRouter = express.Router();

repairerRouter.post("/create",
body('name').isLength({min:3, max:50}).trim().withMessage('name is required'),
body('email').isEmail().trim().withMessage('Write email like :- example@gmail.com'),
body('contact_no').isLength({min:10, max:10}).trim().withMessage('contact number is required'),
body('type_of_repairers').isLength({min:3, max:20}).trim().withMessage('repairer type is required'),
controller.createRepairer)

repairerRouter.delete("/delete",
body('_id').isMongoId().withMessage('Invalid Id'),
controller.deleteField)

repairerRouter.get("/view",
controller.getList)


repairerRouter.get('/get-repairer-by/:_id',
param('_id').isMongoId().withMessage('Invalid Id'),
controller.getrepairer)

repairerRouter.patch("/update",
controller.updateRepairer)





export default repairerRouter;