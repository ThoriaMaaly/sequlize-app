import { usermodel } from "../DataBaseConnection/user.model.js";
import bcrypt from"bcryptjs";

export const checkEmail=async(req,res,next)=>{

const checked= await usermodel.findOne({
    where:{
        email:req.body.email
    }
});
if(checked){
res.status(409).json({message:"email is founded, sign up with another email.."})
}else{
    req.body.password=bcrypt.hashSync(req.body.password,8)
   next();

}

}