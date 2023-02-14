import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    firstname: {type: String, required: true, trim: true, min: 3, max: 50},
    lastname: {type: String, required: true, trim: true, min: 3, max: 50 },
    // roles: {type: [{type: String,enum: ['landlord','tenant','admin']}],default: ['tenant']},
    role: { type: String },
    email: { type: String, required: true, trim: true, min: 6, max: 50, lowercase: true, unique: true},
    username: {type: String, required: true, trim: true,  min: 3, max: 50},
    password: {type: String, required: true, trim: true, min:6, max:10}
})

const user = mongoose.model("users",userSchema);

export default user;



// enum: ["landlord","repairer", "admin", "tenant"], default: "tenant",