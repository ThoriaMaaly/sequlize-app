import Router from "express";
import * as userController from './users.controllers.js'
import { signin,logout } from "../../../middlewares/signin.js";
import { checkEmail } from "../../../middlewares/checkEmail.js";
const userRouter = Router();



userRouter.get("/users",  userController.getAllUsers);

userRouter.post("/users/signup",checkEmail ,userController.signup);

userRouter.get("/users/:id",  userController.getuser);
userRouter.post("/users/signin",signin);
userRouter.post("/logout/:id", logout);
userRouter.delete("/users/:id",  userController.deleteuser);
userRouter.put("/users/:id",  userController.updateuser);

export default userRouter