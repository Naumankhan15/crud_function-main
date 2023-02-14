import mongoose from "mongoose";


const url = "mongodb+srv://nauman:12345@awt.tnp804x.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);




mongoose.connect(url).then(()=>{
    console.log("successfully connected to database");}).catch(
        (err)=>{console.log(err);}
    );

