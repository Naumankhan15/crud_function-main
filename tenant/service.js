import tenant from "../model/tenant.js"
import resMsg from "../utils/resMsg.js"
import tenantt from "../dao/tenantt.js"




export default {

    create: async (data,res)=>{
     const existingtenant = await tenant.findOne({name:data.name})
     if (existingtenant) return res.status(403).json({message:resMsg.tenantexists})
     else {
        tenant(data).save((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong})
            if(result) return res.status(200).json({result:result,message:resMsg.tenantcreate})
        })
     }
    },


    delete: (data,res)=>{
        tenant.findOneAndDelete(data,(err,result)=>{
            if(err) return res.status(400).json({err:err,message:resMsg.somethingwentwrong})
            if(result) return res.status(200).json({result:result, message:resMsg.tenantdelete})
        })
    },

    list: (data,res)=>{
        tenant.find().exec((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
            if(result) return res.status(200).json({result:result, message:resMsg.tenantlist})
        })
    },

    tenantbyId: (data,res)=>{
        tenant.find(data).exec((err,result)=>{
            if(err) return res.status(400).json({message:resMsg.somethingwentwrong});
            if(result) return res.status(200).json({result:result,message:resMsg.tenantbyId})
        })
    },

    update: (data,res)=>{   
        tenantt.updateone({_id:data._id},data,res)
        


        // tenant.findByIdAndUpdate(data,{$set:data}).exec((err,result)=>{
        //     if(err)  return res.status(422).json({err:err, message:"Something went wrong."});
        //     if(result) return res.status(200).json({result:result,message:"Tenant Update Successfully."})
        // })
    }




    
}