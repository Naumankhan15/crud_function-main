import express from "express";
import userRouter from "./user/route.js";
import "./model/connection.js"
import adminRouter from "./admin/route.js";
import bodyParser from "body-parser";
import landlordRouter from "./landLord/route.js";
import tenantRouter from "./tenant/route.js";
import repairerRouter from "./repairer/route.js";


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/auth",userRouter);
app.use("/admin",adminRouter);
app.use("/landlord",landlordRouter);
app.use("/tenant",tenantRouter);
app.use("/repairer",repairerRouter)


app.listen(5000,()=>{
    console.log("server is running.");
})