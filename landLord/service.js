import landlord from "../model/landlord.js"
import resMsg from "../utils/resMsg.js";


export default {

    create: async (data,res)=>{
        const existinguser = await landlord.findOne({name:data.name});
        if (existinguser) return res.status(409).json({message:resMsg.useralreadyexists})
        else {
            landlord(data).save((err,result)=>{
                if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
                if(result) return res.status(200).json({result:result,message:resMsg.landlordcreate});
            })
        }
    },

    delete: (data,res)=>{
        landlord.findOneAndDelete(data,(err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong})
            if(result) return res.status(200).json({result:result, message:resMsg.landlordDelete})
        })
    },

    list: (data,res)=>{
        landlord.find().exec((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
            if(result) return res.status(200).json({result:result, message:resMsg.landlordlistsuccess})
        })
    },

    
    listbyId: (data,res)=>{
        landlord.find(data).exec((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
            if(result) return res.status(200).json({result:result,message:resMsg.landlordbyId})
        })
    }

};