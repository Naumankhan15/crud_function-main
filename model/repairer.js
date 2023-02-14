import mongoose from "mongoose";


const repairerSchema = mongoose.Schema({

    name: {type: String,default:null,min:3, trim:true},
    email: {type: String,default:null,trim:true},
    contact_no: {type: String,min:10,max:10,trim:true,required: true},
    type_of_repairers: {type:String,trim:true,required: true}
})


const repairer = mongoose.model("repairer",repairerSchema)

export default repairer;