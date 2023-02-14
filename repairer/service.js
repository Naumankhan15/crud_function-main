import repairer from "../model/repairer.js"
import resMsg from "../utils/resMsg.js"




export default {
    create: async (data,res) => { 
        const existingrepairer = await repairer.findOne({email:data.email})
        if (existingrepairer) return res.status(403).json({message:resMsg.repairerexists})
        else {
            repairer(data).save((err,result)=>{
               if(err) return res.status(400).json({message:resMsg.somethingwentwrong})
               if(result) return res.status(200).json({result:result,message:resMsg.repairercreate})
           })
        }
    },
    
    delete: (data,res)=>{
        repairer.findOneAndDelete(data,(err,result)=>{
            if(err) return res.status(400).json({err:err,message:resMsg.somethingwentwrong})
            if(result) return res.status(200).json({result:result, message:resMsg.repairerdelete})
        })
    },

    list: (data,res)=>{
        repairer.find({}).exec((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
            if(result) return res.status(200).json({result:result, message:resMsg.repairerlist})
        })
    },

    repairerbyId: (data,res)=>{
        repairer.find(data).exec((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
            if(result) return res.status(200).json({result:result,message:resMsg.repairerbyId})
        })
    },


    update: (data,res)=>{
        repairer.findOneAndUpdate({_id:data._id},data).exec((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
            if(result) return res.status(200).json({result:result,message:resMsg.repairerbyId})
        })
    }

  


}