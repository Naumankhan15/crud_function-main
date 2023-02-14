import mongoose from "mongoose";


const AuthenticationSchema = mongoose.Schema(
    {
    email: { type: String,min:6 , max:20, trim: true, lowercase: true, default: null },
    userName: { type: String, trim: true, min: 3, max: 10 , default: null },
    password: { type: String, },
    role: { type: String, enum: ["landlord","repairer", "admin", "tenat"], default: "tenat" },
    status: { type: Boolean, default: true },
},
{ timestamps: true }
);

const auth = mongoose.model("authentication",AuthenticationSchema)

export default auth;