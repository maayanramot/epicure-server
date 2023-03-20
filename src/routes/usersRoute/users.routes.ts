import express from "express";
import { deleteOneUser, getAllUsers, login, saveUser, userData } from "../../controllers/usersController/users.controllers";

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.post("/", saveUser)
usersRouter.delete("/:id", deleteOneUser)
usersRouter.post("/login", login)
usersRouter.post("/userData", userData)

export default usersRouter;
