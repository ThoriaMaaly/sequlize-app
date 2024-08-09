import { commentsmodel } from "../../comments.model.js";

import { postsmodel } from "../../posts.model.js";
// ***get all comments of an post.....................


const getallcomments=async(req,res)=>{
const postid=req.body.postid;
const userid=req.body.userid;
const comments=await commentsmodel.findAll({
    where:{
        userid:userid,
        postid:postid
    }
});
res.status(200).json({message:"success..",comments})
};

// **************add comment*********
const addcomment=(req,res)=>{
commentsmodel.create(req.body);
res.status(201).json({ message: "added succefully" });

};

// ***********update comment***********
const updatecomment = async (req, res) => {
    const commentId = req.params.id;
 
 
 
    const [updatedcomment] = await commentsmodel.update(req.body, {
       where: {
          id: commentId,
       }
    });
 
    if(updatedcomment>0){
       res.status(200).json({ message: "updated successfully"});
 
    }
    else{
       res.status(401).json({ message: "post not found"});
 
    }
 };

//***************delete comment*************************** */
const deletecomment=async(req,res)=>{

    const commentId = req.params.id;
 const deleted=await commentsmodel.destroy({
    where:{
       id:commentId
    }
 })
 
 if(deleted>0){
    res.status(200).json({ message: "deleted successfully"});
 
 }
 else{
    res.status(401).json({ message: "post not found"});
 
 }
 
 }


export{
    getallcomments,addcomment,updatecomment,deletecomment
}