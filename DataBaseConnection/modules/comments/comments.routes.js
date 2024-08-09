import { Router } from "express";
import { addcomment, deletecomment, getallcomments, updatecomment } from "./comments.controller.js";

export const commentsRoutes=Router();
commentsRoutes.get("/comments",getallcomments);
commentsRoutes.post("/comments",addcomment);
commentsRoutes.put("/comments/:id",updatecomment);
commentsRoutes.delete("/comments/:id",deletecomment);