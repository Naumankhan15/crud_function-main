import mongoose from "mongoose";


const landlordSchema = mongoose.Schema({

    name: {type: String,default: null, trim:true},
    location: {type: String,default: null,trim:true},
    rate: {type: String,default: null,trim:true}

})

const landlord = mongoose.model("landlord",landlordSchema)


export default landlord