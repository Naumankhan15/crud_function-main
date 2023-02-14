import  jwt from "jsonwebtoken";
const SECRET_KEY = "USERLOGIN";

function tokenverification(req,res,next){
    var token = req.header('Authorization');
    if(!token) return res.status(400).json({Message:"token is required."})
    try {
        token = token.replace('Bearer ', '');
        jwt.verify(token,SECRET_KEY,(err,decoded)=>{
            req.user = decoded;
            if(err) return res.status(403).json({err:err,message:"Invalid Token"});
            next();
        });
        
       
    } catch (error) {
        return res.status(400).json({message:"Something went wrong."})
    }
}

function adminVerification(req,res,next){
    if(req.body.role !== 'admin' ) return res.status(404).json({message:"user is not admin"})
    next();
}

function landlordVerification(req, res, next) {
    if (req?.user?.role !== 'landlord' && req?.user?.role !== 'admin') return res.status(401).json({message:"User is not landlord"});
    next();
}

function tenantVerification(req, res, next) {
    if (req?.user?.role !== 'tenant' && req?.user?.role !== 'admin') return res.status(401).json({message:"User is not tenant"});
    next();
}

export  {
    tokenverification,
    adminVerification,
    landlordVerification,
    tenantVerification

};




//   token = token.replace('Bearer ','');
// Jwt.verify(token,SECRET_KEY,(err,decoded)=>{
//     req.user = decoded;
//     if(err) return res.status(403).json({message:"Invalid token"});
//     next();
// })


// if(token){
//     token = token.split(" ")[1];
//     console.log(token);
//     let user = Jwt.verify(token,SECRET_KEY);
//     console.log(user);
//     req.userId = user.Id
   
// } else {
//     res.status(401).json({message:"unauthorized user"})
// }