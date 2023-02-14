import tenant from "../model/tenant.js";
import user from "../model/user.js";




export default{
    updateone: (filter,obj,res) =>{
        user.findOneAndUpdate(filter,{$set:obj}).exec((err,result)=>{
            if(err) return res.status(404).json({message:"something went wrong"});
            if(result) return res.status(200).json({message:"user update success"});
        })
    }
}