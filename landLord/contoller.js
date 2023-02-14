import { validationResult } from "express-validator";
import service from "./service.js";

export default {
  createfield: (req, res) => {
    var data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      service.create(data, res);
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

  landlordbyId: (req, res) => {
    const { _id } = req.params;
    const data = req.body;
    data._id = _id;
    service.listbyId(data, res);
  },
};
