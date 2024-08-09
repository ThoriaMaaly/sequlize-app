import{usermodel}from "../../user.model.js";
import { postsmodel } from "../../posts.model.js";
import { commentsmodel } from "../../comments.model.js";





// ***********all users*********
const getAllUsers=async (req,res)=>{
   const allusers =await usermodel.findAll({

    include:[{model:postsmodel},{model:commentsmodel}]
   });
res.json({message:"allusers ",allusers})


};
// ***************get a spesific user*********
const getuser=async(req,res)=>{
const userid=req.params.id;

const user= await usermodel.findByPk(userid,{
   include:[{model:postsmodel},{model:commentsmodel}]
});

if(user){res.status(200).json({user});}
else{
   res.status(400).json({message:"user not founded.."});
}

};

// ****************update user************
const updateuser = async (req, res) => {
   const userId = req.params.id;



   const [updateduser] = await usermodel.update(req.body, {
      where: {
         id: userId,
      }
   });

   if(updateduser>0){
      res.status(200).json({ message: "updated successfully",updateduser});

   }
   else{
      res.status(401).json({ message: "user not found"});

   }
};
//*********add user***************** *//*************signuppp */

 const signup = async (req, res) => {
   const user = await usermodel.create(req.body);
   res.status(201).json({ message: "added succefully" })
};
//**********delete user************ */
const deleteuser=async(req,res)=>{

   const userId = req.params.id;
const deleted=await usermodel.destroy({
   where:{
      id:userId
   }
})

if(deleted>0){
   res.status(200).json({ message: "deleted successfully"});

}
else{
   res.status(401).json({ message: "user not found"});

}
};
export{getAllUsers,getuser,updateuser,signup,deleteuser};