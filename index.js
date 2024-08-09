import express from 'express';
const app = express();
const port = 8080;
import { connect } from './DataBaseConnection/connection.js';
import userRouter from './DataBaseConnection/modules/users/users.routes.js';
import { postsRoutes } from './DataBaseConnection/modules/posts/posts.routes.js';
import { commentsRoutes } from './DataBaseConnection/modules/comments/comments.routes.js';

connect();

   

app.use(express.json());
 app.use("/",userRouter);
app.use("/",postsRoutes);
app.use("/",commentsRoutes)

app.listen(port,()=>{
console.log('server is running');
})