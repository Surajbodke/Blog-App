import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log("server is running");
});
