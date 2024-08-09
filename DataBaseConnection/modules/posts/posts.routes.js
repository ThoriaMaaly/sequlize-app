import { Router } from "express";
import { addPost, deletepost, getAllposts, getpost, getpostWithAuther, updatepost } from "./posts.controllers.js";
export const postsRoutes=Router();
postsRoutes.get("/posts",getAllposts);
postsRoutes.post("/posts",addPost);
postsRoutes.put("/posts/:id",updatepost);
postsRoutes.get("/posts/:id",getpost);
postsRoutes.get("/post/:id",getpostWithAuther);
postsRoutes.delete("/posts/:id",deletepost);