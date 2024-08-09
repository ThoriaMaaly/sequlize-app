import { usermodel } from "../DataBaseConnection/user.model.js";
import bcrypt from "bcryptjs";

 const signin = async (req, res) => {
    const user = await usermodel.findOne({
        where: {
            email: req.body.email

        }
    });
    if (user) {
        const matchedpass = bcrypt.compareSync(req.body.password, user.password)

        if (matchedpass) {
            await usermodel.update({isLoggedOut:"false"},{
                where:{
                    email: req.body.email
                }
            })
            res.status(200).json({ message: "welcomw...." })
        } else {
            res.status(401).json({ message: "inncorrect email or password..." });
        }

    }
    else {
        res.status(401).json({ message: "inncorrect email or password..." });


    }


};

 const logout=async(req,res)=>{
    const{id}=req.params;
   const updated= await usermodel.update({isLoggedOut:"true"},{
        where:{
            id:id
        }
    });

    if(updated>0){
        res.status(201).json({message:"please sign in....."})
    }
 }
 export{logout,signin}