import service from "./service.js"
import { validationResult } from "express-validator";




export default {

    createRepairer: (req,res)=>{
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

      getrepairer: (req, res) => {
        const { _id } = req.params;
        const data = req.body;
        data._id = _id;
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
          return res.status(422).jsonp(errors.array());
        }else{
            service.repairerbyId(data, res);
        }
      },

      updateRepairer: (req,res)=>{
        const { _id } = req.params;
        const data = req.body;
        data._id = _id;
        console.log(data);
        service.update(data,res)
      }





}