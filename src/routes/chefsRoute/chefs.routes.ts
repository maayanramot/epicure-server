import express from "express";
import { deleteOneChef, getAllChefs } from "../../controllers/chefsController/chefs.controllers";

const chefsRouter = express.Router();

chefsRouter.get("/", getAllChefs);
chefsRouter.delete("/:id", deleteOneChef)

export default chefsRouter;

