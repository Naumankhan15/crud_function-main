import { validationResult } from "express-validator";
import service from "./service.js";

export default {
  SignupUser: (req, res) => {
    const data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      service.createUser(data, res);
    }
  },

  SignInUser: (req,res)=>{
    var data = req.body;
     const errors = validationResult(req)
     if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
      } else {
        service.Login(data,res)
      }


  }











};
