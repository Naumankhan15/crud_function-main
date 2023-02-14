import auth from "../model/auth.js";
import bcrypt from "bcrypt";
import  Jwt from "jsonwebtoken";
const SECRET_KEY = "USERLOGIN";

export default {
  createUser: async (data, res) => {
    const existingUser = await auth.findOne({ email: data.email });
    data.password = await bcrypt.hash(data.password,10)
    if (existingUser)
      return res.status(400).json({ message: "user already exists." });
    else {
      auth(data).save((err, result) => {
        if (err) return res.status(400).json({ err:err,message: "Bad request" });
        if (result)
          return res
            .status(200)
            .json({ result: result, message: "User register Success." });
      });
    }
  },

  Login: async (data,res)=>{
    var {email,password} = data
    const loginUser = await auth.findOne({email:email})
    if(!loginUser) return res.status().json({message:"Write email correctly."})
    else {
        bcrypt.compare(password,loginUser.password,(err,result)=>{
            if(err) return res.status(400).json({message:"Wrong Password."});
            const token = Jwt.sign({_id:result._id,role:result.role},SECRET_KEY);
            if(result) return res.status(200).json({result:result,message:"User Login Success.",token:token});
        });
    };




  }



};
