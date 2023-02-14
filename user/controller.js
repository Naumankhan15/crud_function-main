import { validationResult } from "express-validator";
import { getuserobject } from "../Mapper/user.mapper.js";
import service from "./service.js"


export default {
  signUp: async (req, res) => {
    const data = req.body
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      // if( data.role !=="landlord" && data.role !=="tenat" ) return res.status(400).json({message:"This role is not allowed."})
      service.createUser(getuserobject(data), res);
    }
  },

  signIn: async (req, res) => {
    var data = req.body;
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      service.LoginUser(data, res);
    }
  },

  updatePassByoldPass: async (req, res) => {
    var data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).jsonp(errors.array());
    } else {
      service.updatePassByoldPass(data, res);
    }
  },

  // updateUser: (req,res)=>{
  //   const { _id } = req.user;
  //   var data = req.body
  //   data._id = _id
  //   service.update(data,res)
  // },


  
  Logout: async (req, res) => {
    var data ={}
    data._id = req.user._id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).jsonp(errors.array());
    } else {
      service.Logout(data, res);
    }
  },
};
