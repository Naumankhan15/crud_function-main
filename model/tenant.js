import mongoose from "mongoose";

const tenantSchema = mongoose.Schema({

    name: {type: String, trim:true, default:null,min:3,max:20},
    location: {type: String, trim:true, default:null,min:3,max:10},
    movedIn: {type: Date},
    movedOut: {type: Date}
},
{ timestamps: true }
)


const tenant = mongoose.model("tenant",tenantSchema);

export default tenant;