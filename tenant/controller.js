import { validationResult } from "express-validator";
import service from "./service.js"





export default {

    createTenant: (req,res)=>{
        const data = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).jsonp(errors.array());
        } else {
          service.create(data,res)
        }
    },


    deleteField: (req, res) => {
      const { _id } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
      } else {
        service.delete({ _id }, res);
      }
    },

    getList: (req, res) => {
      const data = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
      } else {
        service.list(data, res);
      }
    },

    tenantList: (req, res) => {
      const { _id } = req.params;
      const data = req.body;
      data._id = _id;
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
      }else{
          service.tenantbyId(data, res);
      }
    },

    updateTenant: (req,res) => {
      const { _id } = req.user;
      var data = req.body;
      data._id = _id;
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(422).jsonp(errors.array());
      } else{
        service.update(data,res)
      }
     }

}
