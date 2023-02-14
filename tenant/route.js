import express from "express";
import controller from "./controller.js";
import { param,body } from "express-validator";
import { tenantVerification, tokenverification } from "../middleware/auth.js";



const tenantRouter = express.Router();

tenantRouter.post("/create",
body('name').isLength({min:3, max:50}).trim().withMessage('name is required'),
body('location').isLength({min:3, max:50}).trim().withMessage('location is required'),
tokenverification,
tenantVerification,
controller.createTenant
)

tenantRouter.delete("/delete",
body('_id').isMongoId().withMessage('Invalid Id'),
controller.deleteField)

tenantRouter.get("/view",
controller.getList)


tenantRouter.get('/get-tenant-by/:_id',
param('_id').isMongoId().withMessage('Invalid Id'),
controller.tenantList)



tenantRouter.patch("/update",
tokenverification,
controller.updateTenant)





export default tenantRouter;