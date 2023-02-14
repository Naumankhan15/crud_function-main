import user from "../model/user.js";
import resMsg from "../utils/resMsg.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../model/auth.js";
const SECRET_KEY = "USERLOGIN";


  const createUser =  async (data, res) => {
    data.password = await bcrypt.hash(data.password, 10);
    const registeruser = await user.findOne({ email: data.email });
    if (registeruser)
      return res.status(403).json({ message: resMsg.useralreadyexists });
    else {
        user(data).save((err, result) => {
        if (err)  return res.status(400).json({err:err, message: resMsg.badrequest });
        if (result) return res.status(200).json({ result: result, message: resMsg.userregistersuccess });
      });
    } 
  }

  const LoginUser= async (data, res) => {
    var { email, password } = data;

    const LoginUser = await user.findOne({ email: email });
    if (!LoginUser) return res.status(404).json({ message: resMsg.wrongemail });
   
     const matchPassword = await bcrypt.compare(password,LoginUser.password);

     if(!matchPassword) return res.status(400).json({message:"wrong password or check password"});
     else {
      const token = jwt.sign({_id:LoginUser._id,role:LoginUser.role},SECRET_KEY)
      res.status(201).json({result:LoginUser,message:"user login success",token:token})
     }

    }
  



 // bcrypt.compare(password, LoginUser.password, (err, result) => {
      //   if (err) return res.status(400).json({ message: resMsg.badrequest });
      //   if (!result)
      //     return res.status(404).json({ message: resMsg.wrongpassword });
      //   else {
      //     const token = jwt.sign({_id:result._id , role:result.role},SECRET_KEY)
      //     return res.status(200).json({ result: result, token:token, message: resMsg.userloginsuccess });
      //   }
      // });









 const updatePassByoldPass = async (data, res) => {
    user.findOne({ _id: data._id }).exec((err, result) => {
      
if(err)
 return res.status(400).json({message:"something went wrong"});
if(result){
console.log(result);
const match =  bcrypt.compare(data.newpassword,result.password);
if(match) return res.status(401).json({message:"password exists"})
const success = bcrypt.compare(data.oldpassword,result.password);
if(success){
    var password = bcrypt.hash(data.newpassword,10);
    var obj = {}
    obj.password = password;
    user.findOneAndUpdate({_id:data._id},obj,(err,result)=>{
        if(err) return res.status(400).json({message:"bad request"})
        if(result) return res.status(200).json({message:"password update"})
    })
}else return res.status(200).json({message:"correct password"})
}})
    };
  

  const Logout =  async (data, res) => {
    user.findOneAndUpdate({_id:data._id}).exec((err,result)=>{
      console.log(err);
        if(err) return res.status(400).json({err:err,message:"Bad request"})
        if(result) return res.status(200).json({result:result,message:"Logout successfully."})
    })
  }


  // const update = (data,res)=>{
  //   user.findOneAndUpdate({_id:data._id},{$set:data}).exec((err,result)=>{
  //     console.log(data);
  //     if(err) return res.status(400).json({message:"Something went wrong."});
  //     if(result) return res.status(200).json({message:"User update success"});
  //   })
  // }


  export default  {
    createUser,
    LoginUser,
    updatePassByoldPass,
    Logout,


   }




// if(err)
// console.log(err);
//  return res.status(400).json({message:"something went wrong"});
// if(result){
// console.log(result);
// const match =  bcrypt.compare(data.newpassword,result.password);
// if(match) return res.status(401).json({message:"password exists"})
// const success = bcrypt.compare(data.oldpassword,result.password);
// if(success){
//     var password = bcrypt.hash(data.newpassword,10);
//     var obj = {}
//     obj.password = password;
//     user.findOneAndUpdate({_id:data._id},obj,(err,result)=>{
//         if(err) return res.status(400).json({message:"bad request"})
//         if(result) return res.status(200).json({message:"password update"})
//     })
// }else return res.status(200).json({message:"correct password"})
// }})
