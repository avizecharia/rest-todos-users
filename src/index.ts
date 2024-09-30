import express, { Express } from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import authController from "./controllers/authController";
import userController from "./controllers/userController";
import todoController from "./controllers/todoController";



const app: Express = express();

app.use(express.json()); // to get the req.body
app.use(cookieParser()); // to get the req.cookie(s)

app.use('/auth',authController)
app.use('/users',userController)
app.use('/todos',todoController)

app.listen(process.env.PORT, () =>
  console.log(
    `server is up and running , fell free to visit on http://localhost:${process.env.PORT}`
  )
);
