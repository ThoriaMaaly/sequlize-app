import { commentsmodel } from "../../comments.model.js";
import { postsmodel } from "../../posts.model.js";
import { usermodel } from "../../user.model.js";

// *get all posts*******
const getAllposts = async (req, res) => {
   const allposts = await postsmodel.findAll({
      include: [{ model: usermodel }, { model: commentsmodel }]
   });
   res.json({ message: "allposts", allposts })


};

// *********get specific post************************


const getpost = async (req, res) => {
   const postId = req.params.id;
   const post = await postsmodel.findByPk(postId);
   if (post) {
      res.status(200).json({ post });
   } else {
      res.status(401).json({ message: "post not found" });
   }

};

//***** */getpostWithAuther******************
const getpostWithAuther = async (req, res) => {
   const { userid } = req.body;
   const postId = req.params.id;
   const post = await postsmodel.findOne({

      where: {
         id: postId,
         userid: userid

      }
   });
   if (post) {
      res.status(200).json({ post });
   } else {
      res.status(401).json({ message: "post not found" });
   }

};

// ********************addd post***

const addPost = async (req, res) => {
   const post = await postsmodel.create(req.body);
   res.status(201).json({ message: "added succefully" })
};

// **************update post********************
const updatepost = async (req, res) => {
   const postId = req.params.id;
   const { userid } = req.body;   //******to be sure that the same user can update his posts only**** */



   const [updatedpost] = await postsmodel.update(req.body, {
      where: {
         id: postId,
         userid: userid
      }
   });

   if (updatedpost > 0) {
      res.status(200).json({ message: "updated successfully" });

   }
   else {
      res.status(401).json({ message: "post not found" });

   }
};


//***************delete post*************************** */
const deletepost = async (req, res) => {
   const { userid } = req.body;   //******to be sure that the same user can delete his posts only**** */
   const postId = req.params.id;


   const deleted = await postsmodel.destroy({
      where: {
         id: postId,
         userid: userid
      }
   })

   if (deleted > 0) {
      res.status(200).json({ message: "deleted successfully" });

   }
   else {
      res.status(401).json({ message: "post not found" });

   }

}
export {
   getAllposts,getpostWithAuther,
   getpost, addPost, updatepost, deletepost
}